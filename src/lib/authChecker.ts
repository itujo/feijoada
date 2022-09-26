import type { PrismaClient } from '@prisma/client';
import type { ExpressContext } from 'apollo-server-express';
import type { AuthChecker } from 'type-graphql';

export const customAuthChecker: AuthChecker<{
  ctx: ExpressContext;
  prisma: PrismaClient;
}> = ({ context }, roles) => {
  console.log(context.ctx.req.body);

  // console.log({ context });

  // console.log(req.body);

  // console.log({ req, roles });

  // here we can read the user from context
  // and check his permission in the db against the `roles` argument
  // that comes from the `@Authorized` decorator, eg. ["ADMIN", "MODERATOR"]

  return false; // or false if access is denied
};
