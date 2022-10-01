import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateStateArgs } from "./args/AggregateStateArgs";
import { State } from "../../../models/State";
import { AggregateState } from "../../outputs/AggregateState";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => State)
export class AggregateStateResolver {
  @TypeGraphQL.Query(_returns => AggregateState, {
    nullable: false
  })
  async aggregateState(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateStateArgs): Promise<AggregateState> {
    return getPrismaFromContext(ctx).state.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
