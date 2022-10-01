import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateMovementArgs } from "./args/AggregateMovementArgs";
import { Movement } from "../../../models/Movement";
import { AggregateMovement } from "../../outputs/AggregateMovement";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Movement)
export class AggregateMovementResolver {
  @TypeGraphQL.Query(_returns => AggregateMovement, {
    nullable: false
  })
  async aggregateMovement(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMovementArgs): Promise<AggregateMovement> {
    return getPrismaFromContext(ctx).movement.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
