import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteOnePostingUnitArgs } from "./args/DeleteOnePostingUnitArgs";
import { PostingUnit } from "../../../models/PostingUnit";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PostingUnit)
export class DeleteOnePostingUnitResolver {
  @TypeGraphQL.Mutation(_returns => PostingUnit, {
    nullable: true
  })
  async deleteOnePostingUnit(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOnePostingUnitArgs): Promise<PostingUnit | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).postingUnit.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
