import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertOnePostingUnitArgs } from "./args/UpsertOnePostingUnitArgs";
import { PostingUnit } from "../../../models/PostingUnit";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PostingUnit)
export class UpsertOnePostingUnitResolver {
  @TypeGraphQL.Mutation(_returns => PostingUnit, {
    nullable: false
  })
  async upsertOnePostingUnit(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOnePostingUnitArgs): Promise<PostingUnit> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).postingUnit.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
