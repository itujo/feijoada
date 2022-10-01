import type { Permissions, PrismaClient, Roles } from '@prisma/client';
import type { Request, Response } from 'express';
import type { Session, SessionData } from 'express-session';
import type Redis from 'ioredis';

type MyContext = {
  req: Request & {
    session: Session &
      Partial<SessionData> &
      Partial<{
        user: {
          id: number;
          role: Roles;
          permissions: Permissions[];
        };
      }>;
  };
  redis: Redis;
  res: Response;
  prisma: PrismaClient;
};

export type { MyContext };
