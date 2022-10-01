import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCityArgs } from "./args/AggregateCityArgs";
import { City } from "../../../models/City";
import { AggregateCity } from "../../outputs/AggregateCity";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => City)
export class AggregateCityResolver {
  @TypeGraphQL.Query(_returns => AggregateCity, {
    nullable: false
  })
  async aggregateCity(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCityArgs): Promise<AggregateCity> {
    return getPrismaFromContext(ctx).city.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
