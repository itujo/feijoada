import { Roles } from '@prisma/client';

const roleArray = (role: Roles) => {
  const roles = Object.keys(Roles).reverse();

  return roles.splice(roles.indexOf(role));
};

export { roleArray };
