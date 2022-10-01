import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregatePostingUnitArgs } from "./args/AggregatePostingUnitArgs";
import { PostingUnit } from "../../../models/PostingUnit";
import { AggregatePostingUnit } from "../../outputs/AggregatePostingUnit";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PostingUnit)
export class AggregatePostingUnitResolver {
  @TypeGraphQL.Query(_returns => AggregatePostingUnit, {
    nullable: false
  })
  async aggregatePostingUnit(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePostingUnitArgs): Promise<AggregatePostingUnit> {
    return getPrismaFromContext(ctx).postingUnit.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
