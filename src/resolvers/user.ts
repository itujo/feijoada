import { hash, verify } from 'argon2';
import { Arg, Ctx, Mutation, Query, Resolver } from 'type-graphql';
import type { MyContext } from '../@types/context';
import { COOKIE_NAME } from '../constants';
import { User, UserCreateInput } from '../generated';

@Resolver()
export class UserResolver {
  @Mutation(() => User, { nullable: true })
  async register(
    @Arg('options') options: UserCreateInput,
    @Ctx() { prisma, req }: MyContext,
  ): Promise<User | null> {
    const hashedPassword = await hash(options.password);

    let user;

    try {
      user = await prisma.user.create({
        data: {
          username: options.username,
          password: hashedPassword,
          name: options.name ?? '',
          email: options.email ?? '',
        },
      });
    } catch (error) {
      console.log(error);
    }

    if (!user) return null;
    req.session.user = {
      id: user.id,
      role: user.role,
      permissions: user.permissions,
    };

    return user;
  }

  @Mutation(() => User, { nullable: true })
  async login(
    @Arg('usernameOrEmail') usernameOrEmail: string,
    @Arg('password') password: string,
    @Arg('remember') remember: boolean,
    @Ctx() { prisma, req }: MyContext,
  ): Promise<User | null> {
    const isEmail = usernameOrEmail.includes('@');
    const opt = isEmail
      ? { email: usernameOrEmail }
      : { username: usernameOrEmail };
    const user = await prisma.user.findUnique({
      where: opt,
    });

    if (!user) {
      req.session.destroy((e) => console.log(e));
      return null;
    }

    const valid = await verify(user.password, password);

    if (!valid) {
      req.session.destroy((e) => console.log(e));

      return null;
    }

    req.session.user = {
      id: user.id,
      role: user.role,
      permissions: user.permissions,
    };

    if (remember) {
      req.session.cookie.maxAge = 1000 * 60 * 60 * 24 * 365 * 10; // 10 years
    }

    return user;
  }

  @Mutation(() => Boolean)
  async logout(@Ctx() { req, res }: MyContext): Promise<boolean> {
    return new Promise((resolve) =>
      // eslint-disable-next-line no-promise-executor-return
      req.session.destroy((err) => {
        res.clearCookie(COOKIE_NAME);
        if (err) {
          console.log(err);
          resolve(false);
          return;
        }

        resolve(true);
      }),
    );
  }

  @Query(() => User, { nullable: true })
  async me(@Ctx() { req, prisma }: MyContext): Promise<User | null> {
    const id = req.session.user?.id;

    if (!id) return null;

    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    return user;
  }
}
