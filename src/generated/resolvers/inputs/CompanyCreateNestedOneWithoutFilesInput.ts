import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CompanyCreateOrConnectWithoutFilesInput } from "../inputs/CompanyCreateOrConnectWithoutFilesInput";
import { CompanyCreateWithoutFilesInput } from "../inputs/CompanyCreateWithoutFilesInput";
import { CompanyWhereUniqueInput } from "../inputs/CompanyWhereUniqueInput";

@TypeGraphQL.InputType("CompanyCreateNestedOneWithoutFilesInput", {
  isAbstract: true
})
export class CompanyCreateNestedOneWithoutFilesInput {
  @TypeGraphQL.Field(_type => CompanyCreateWithoutFilesInput, {
    nullable: true
  })
  create?: CompanyCreateWithoutFilesInput | undefined;

  @TypeGraphQL.Field(_type => CompanyCreateOrConnectWithoutFilesInput, {
    nullable: true
  })
  connectOrCreate?: CompanyCreateOrConnectWithoutFilesInput | undefined;

  @TypeGraphQL.Field(_type => CompanyWhereUniqueInput, {
    nullable: true
  })
  connect?: CompanyWhereUniqueInput | undefined;
}
