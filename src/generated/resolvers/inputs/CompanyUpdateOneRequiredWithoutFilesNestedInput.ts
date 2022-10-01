import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CompanyCreateOrConnectWithoutFilesInput } from "../inputs/CompanyCreateOrConnectWithoutFilesInput";
import { CompanyCreateWithoutFilesInput } from "../inputs/CompanyCreateWithoutFilesInput";
import { CompanyUpdateWithoutFilesInput } from "../inputs/CompanyUpdateWithoutFilesInput";
import { CompanyUpsertWithoutFilesInput } from "../inputs/CompanyUpsertWithoutFilesInput";
import { CompanyWhereUniqueInput } from "../inputs/CompanyWhereUniqueInput";

@TypeGraphQL.InputType("CompanyUpdateOneRequiredWithoutFilesNestedInput", {
  isAbstract: true
})
export class CompanyUpdateOneRequiredWithoutFilesNestedInput {
  @TypeGraphQL.Field(_type => CompanyCreateWithoutFilesInput, {
    nullable: true
  })
  create?: CompanyCreateWithoutFilesInput | undefined;

  @TypeGraphQL.Field(_type => CompanyCreateOrConnectWithoutFilesInput, {
    nullable: true
  })
  connectOrCreate?: CompanyCreateOrConnectWithoutFilesInput | undefined;

  @TypeGraphQL.Field(_type => CompanyUpsertWithoutFilesInput, {
    nullable: true
  })
  upsert?: CompanyUpsertWithoutFilesInput | undefined;

  @TypeGraphQL.Field(_type => CompanyWhereUniqueInput, {
    nullable: true
  })
  connect?: CompanyWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CompanyUpdateWithoutFilesInput, {
    nullable: true
  })
  update?: CompanyUpdateWithoutFilesInput | undefined;
}
