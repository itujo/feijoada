import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CompanyCreateWithoutFilesInput } from "../inputs/CompanyCreateWithoutFilesInput";
import { CompanyUpdateWithoutFilesInput } from "../inputs/CompanyUpdateWithoutFilesInput";

@TypeGraphQL.InputType("CompanyUpsertWithoutFilesInput", {
  isAbstract: true
})
export class CompanyUpsertWithoutFilesInput {
  @TypeGraphQL.Field(_type => CompanyUpdateWithoutFilesInput, {
    nullable: false
  })
  update!: CompanyUpdateWithoutFilesInput;

  @TypeGraphQL.Field(_type => CompanyCreateWithoutFilesInput, {
    nullable: false
  })
  create!: CompanyCreateWithoutFilesInput;
}
