import 'reflect-metadata';

// eslint-disable-next-line import/no-extraneous-dependencies
import { applyResolversEnhanceMap, resolvers } from '@generated/type-graphql';
import { ApolloServer } from 'apollo-server';
import { schedule } from 'node-cron';
import { buildSchema } from 'type-graphql';
import {
  saveCredits,
  saveDebits,
  saveHeaders,
  saveMovements,
} from './controllers/db/Savetodb.controller';
import { downloadFtpFiles } from './controllers/ftp/Ftp.controller';
import { parseFiles } from './controllers/parse/Csvparse.controller';
import { customAuthChecker } from './lib/authChecker';
import { resolversEnhanceMap } from './lib/gql';
import { prisma } from './lib/prisma';

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
  applyResolversEnhanceMap(resolversEnhanceMap);
  const schema = await buildSchema({
    resolvers: [...resolvers],
    validate: false,
    authChecker: customAuthChecker,
  });

  const server = new ApolloServer({
    schema,
    context: (ctx) => ({ prisma, ctx }),
  });

  const { url } = await server.listen(PORT);
  console.log(`Server is running at ${url}`);
};

try {
  main();
} catch (error) {
  console.log(error);
}
