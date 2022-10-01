import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateOnePostingUnitArgs } from "./args/CreateOnePostingUnitArgs";
import { PostingUnit } from "../../../models/PostingUnit";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PostingUnit)
export class CreateOnePostingUnitResolver {
  @TypeGraphQL.Mutation(_returns => PostingUnit, {
    nullable: false
  })
  async createOnePostingUnit(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOnePostingUnitArgs): Promise<PostingUnit> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).postingUnit.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
