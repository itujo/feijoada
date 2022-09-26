import { PrismaClient } from '@prisma/client';

const prisma =
  process.env.NODE_ENV === 'development'
    ? new PrismaClient({
        log: ['info', 'warn', 'error'],
      })
    : new PrismaClient();

export { prisma };
