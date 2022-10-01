import type { AuthChecker } from 'type-graphql';
import type { MyContext } from '../@types/context';

export const customAuthChecker: AuthChecker<MyContext> = async (
  { context },
  roles,
) => {
  const { req } = context;

  if (!req.session.user) {
    return false;
  }

  const user = await context.prisma.user.findUnique({
    where: {
      id: req.session.user.id,
    },
    select: {
      role: true,
    },
  });

  if (!user) return false;

  const { role } = user;

  if (roles.includes(role)) {
    return true;
  }

  return false; // default deny
};
