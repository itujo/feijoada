import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyPostingUnitArgs } from "./args/FindManyPostingUnitArgs";
import { PostingUnit } from "../../../models/PostingUnit";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PostingUnit)
export class FindManyPostingUnitResolver {
  @TypeGraphQL.Query(_returns => [PostingUnit], {
    nullable: false
  })
  async postingUnits(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyPostingUnitArgs): Promise<PostingUnit[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).postingUnit.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
