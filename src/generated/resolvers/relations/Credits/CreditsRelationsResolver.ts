import * as TypeGraphQL from "type-graphql";
import { Credits } from "../../../models/Credits";
import { File } from "../../../models/File";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Credits)
export class CreditsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => File, {
    nullable: false
  })
  async file(@TypeGraphQL.Root() credits: Credits, @TypeGraphQL.Ctx() ctx: any): Promise<File> {
    return getPrismaFromContext(ctx).credits.findUnique({
      where: {
        id: credits.id,
      },
    }).file({});
  }
}
