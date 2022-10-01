import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCreditsArgs } from "./args/AggregateCreditsArgs";
import { Credits } from "../../../models/Credits";
import { AggregateCredits } from "../../outputs/AggregateCredits";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Credits)
export class AggregateCreditsResolver {
  @TypeGraphQL.Query(_returns => AggregateCredits, {
    nullable: false
  })
  async aggregateCredits(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCreditsArgs): Promise<AggregateCredits> {
    return getPrismaFromContext(ctx).credits.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
