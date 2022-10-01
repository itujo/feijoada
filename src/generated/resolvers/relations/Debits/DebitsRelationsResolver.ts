import * as TypeGraphQL from "type-graphql";
import { Debits } from "../../../models/Debits";
import { File } from "../../../models/File";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Debits)
export class DebitsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => File, {
    nullable: false
  })
  async receipt(@TypeGraphQL.Root() debits: Debits, @TypeGraphQL.Ctx() ctx: any): Promise<File> {
    return getPrismaFromContext(ctx).debits.findUnique({
      where: {
        id: debits.id,
      },
    }).receipt({});
  }
}
