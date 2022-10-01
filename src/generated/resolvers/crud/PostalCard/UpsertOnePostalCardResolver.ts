import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertOnePostalCardArgs } from "./args/UpsertOnePostalCardArgs";
import { PostalCard } from "../../../models/PostalCard";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PostalCard)
export class UpsertOnePostalCardResolver {
  @TypeGraphQL.Mutation(_returns => PostalCard, {
    nullable: false
  })
  async upsertOnePostalCard(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOnePostalCardArgs): Promise<PostalCard> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).postalCard.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
