import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregatePostalCardArgs } from "./args/AggregatePostalCardArgs";
import { PostalCard } from "../../../models/PostalCard";
import { AggregatePostalCard } from "../../outputs/AggregatePostalCard";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PostalCard)
export class AggregatePostalCardResolver {
  @TypeGraphQL.Query(_returns => AggregatePostalCard, {
    nullable: false
  })
  async aggregatePostalCard(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePostalCardArgs): Promise<AggregatePostalCard> {
    return getPrismaFromContext(ctx).postalCard.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
