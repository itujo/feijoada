import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateOnePostalCardArgs } from "./args/CreateOnePostalCardArgs";
import { PostalCard } from "../../../models/PostalCard";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PostalCard)
export class CreateOnePostalCardResolver {
  @TypeGraphQL.Mutation(_returns => PostalCard, {
    nullable: false
  })
  async createOnePostalCard(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOnePostalCardArgs): Promise<PostalCard> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).postalCard.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
