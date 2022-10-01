import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByPostingUnitArgs } from "./args/GroupByPostingUnitArgs";
import { PostingUnit } from "../../../models/PostingUnit";
import { PostingUnitGroupBy } from "../../outputs/PostingUnitGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PostingUnit)
export class GroupByPostingUnitResolver {
  @TypeGraphQL.Query(_returns => [PostingUnitGroupBy], {
    nullable: false
  })
  async groupByPostingUnit(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPostingUnitArgs): Promise<PostingUnitGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).postingUnit.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
