import 'reflect-metadata';

// eslint-disable-next-line import/no-extraneous-dependencies
import { ApolloServer } from 'apollo-server-express';
import connectRedis from 'connect-redis';
import cors from 'cors';
import express from 'express';
import session from 'express-session';
import Redis from 'ioredis';
import { schedule } from 'node-cron';
import { buildSchema } from 'type-graphql';
import type { MyContext } from './@types/context';
import { COOKIE_NAME, __prod__ } from './constants';
import {
  saveCredits,
  saveDebits,
  saveHeaders,
  saveMovements,
} from './controllers/db/Savetodb.controller';
import { downloadFtpFiles } from './controllers/ftp/Ftp.controller';
import { parseFiles } from './controllers/parse/Csvparse.controller';
import { applyResolversEnhanceMap, resolvers } from './generated';
import { customAuthChecker } from './lib/authChecker';
import { prisma } from './lib/prisma';
import { resolversEnhanceMap } from './lib/resolverEnhanceMap';
import { UserResolver } from './resolvers/user';

const crawler = async () => {
  console.time('do all');
  await downloadFtpFiles('INTERNATIONAL');
  const international = await parseFiles('INTERNATIONAL');
  await saveHeaders(international);

  await saveMovements(international);

  // return;
  await saveCredits(international);
  await saveDebits(international);

  await downloadFtpFiles('NATIONAL');
  const national = await parseFiles('NATIONAL');
  await saveHeaders(national);

  await saveMovements(national);

  // return;
  await saveCredits(national);
  await saveDebits(national);

  console.timeEnd('do all');
};

schedule('* 4,6 * * *', async () => {
  await crawler();
});

const PORT = process.env.PORT || 4000;

const main = async () => {
  const app = express();

  const RedisStore = connectRedis(session);

  const redis = new Redis(process.env.REDIS_URL);

  app.set('trust proxy', true);

  app.use(
    cors({
      origin: __prod__
        ? [
            'https://caipirinha.vercel.app',
            'https://caipirinha.anjunexpress.com.br',
          ]
        : ['https://studio.apollographql.com', 'http://localhost:3000'],
      credentials: true,
    }),
  );

  app.use(
    session({
      name: COOKIE_NAME,
      store: new RedisStore({
        client: redis,
        disableTouch: true,
      }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24, // 1 day
        httpOnly: true,
        sameSite: 'none',
        secure: true,
        domain: __prod__ ? '.anjunexpress.com.br' : undefined,
      },
      saveUninitialized: false,
      secret: process.env.SESSION_SECRET,
      resave: false,
    }),
  );

  applyResolversEnhanceMap(resolversEnhanceMap);
  const schema = await buildSchema({
    resolvers: [...resolvers, UserResolver],
    validate: false,
    authChecker: customAuthChecker,
  });

  const apolloServer = new ApolloServer({
    schema,
    context: ({ req, res }): Partial<MyContext> => ({
      req,
      res,
      prisma,
    }),
    cache: 'bounded',
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({
    app,
    cors: false,
  });

  app.listen(PORT, () => {
    console.log(`server started on change localhost:${PORT}`);
  });
};

main().catch((e) => console.log(e));
