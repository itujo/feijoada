import * as TypeGraphQL from "type-graphql";
import { Movement } from "../../../models/Movement";
import { PostingUnit } from "../../../models/PostingUnit";
import { PostingUnitMovementsArgs } from "./args/PostingUnitMovementsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PostingUnit)
export class PostingUnitRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Movement], {
    nullable: false
  })
  async movements(@TypeGraphQL.Root() postingUnit: PostingUnit, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PostingUnitMovementsArgs): Promise<Movement[]> {
    return getPrismaFromContext(ctx).postingUnit.findUnique({
      where: {
        id: postingUnit.id,
      },
    }).movements(args);
  }
}
