import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateDebitsArgs } from "./args/AggregateDebitsArgs";
import { Debits } from "../../../models/Debits";
import { AggregateDebits } from "../../outputs/AggregateDebits";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Debits)
export class AggregateDebitsResolver {
  @TypeGraphQL.Query(_returns => AggregateDebits, {
    nullable: false
  })
  async aggregateDebits(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateDebitsArgs): Promise<AggregateDebits> {
    return getPrismaFromContext(ctx).debits.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
