import * as TypeGraphQL from "type-graphql";
import { Company } from "../../../models/Company";
import { File } from "../../../models/File";
import { Movement } from "../../../models/Movement";
import { CompanyFilesArgs } from "./args/CompanyFilesArgs";
import { CompanyMovementsArgs } from "./args/CompanyMovementsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Company)
export class CompanyRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [File], {
    nullable: false
  })
  async files(@TypeGraphQL.Root() company: Company, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CompanyFilesArgs): Promise<File[]> {
    return getPrismaFromContext(ctx).company.findUnique({
      where: {
        id: company.id,
      },
    }).files(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Movement], {
    nullable: false
  })
  async movements(@TypeGraphQL.Root() company: Company, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CompanyMovementsArgs): Promise<Movement[]> {
    return getPrismaFromContext(ctx).company.findUnique({
      where: {
        id: company.id,
      },
    }).movements(args);
  }
}
