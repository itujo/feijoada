import * as TypeGraphQL from "type-graphql";
import { Company } from "../../../models/Company";
import { Credits } from "../../../models/Credits";
import { Debits } from "../../../models/Debits";
import { File } from "../../../models/File";
import { Movement } from "../../../models/Movement";
import { FileCreditsArgs } from "./args/FileCreditsArgs";
import { FileDebitsArgs } from "./args/FileDebitsArgs";
import { FileMovementsArgs } from "./args/FileMovementsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => File)
export class FileRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Debits], {
    nullable: false
  })
  async debits(@TypeGraphQL.Root() file: File, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FileDebitsArgs): Promise<Debits[]> {
    return getPrismaFromContext(ctx).file.findUnique({
      where: {
        id: file.id,
      },
    }).debits(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Credits], {
    nullable: false
  })
  async credits(@TypeGraphQL.Root() file: File, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FileCreditsArgs): Promise<Credits[]> {
    return getPrismaFromContext(ctx).file.findUnique({
      where: {
        id: file.id,
      },
    }).credits(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Movement], {
    nullable: false
  })
  async movements(@TypeGraphQL.Root() file: File, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FileMovementsArgs): Promise<Movement[]> {
    return getPrismaFromContext(ctx).file.findUnique({
      where: {
        id: file.id,
      },
    }).movements(args);
  }

  @TypeGraphQL.FieldResolver(_type => Company, {
    nullable: false
  })
  async company(@TypeGraphQL.Root() file: File, @TypeGraphQL.Ctx() ctx: any): Promise<Company> {
    return getPrismaFromContext(ctx).file.findUnique({
      where: {
        id: file.id,
      },
    }).company({});
  }
}
