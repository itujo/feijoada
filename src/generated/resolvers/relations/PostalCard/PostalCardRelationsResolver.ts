import * as TypeGraphQL from "type-graphql";
import { Movement } from "../../../models/Movement";
import { PostalCard } from "../../../models/PostalCard";
import { PostalCardMovementsArgs } from "./args/PostalCardMovementsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PostalCard)
export class PostalCardRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Movement], {
    nullable: false
  })
  async movements(@TypeGraphQL.Root() postalCard: PostalCard, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PostalCardMovementsArgs): Promise<Movement[]> {
    return getPrismaFromContext(ctx).postalCard.findUnique({
      where: {
        id: postalCard.id,
      },
    }).movements(args);
  }
}
