import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FileCreateWithoutCompanyInput } from "../inputs/FileCreateWithoutCompanyInput";
import { FileWhereUniqueInput } from "../inputs/FileWhereUniqueInput";

@TypeGraphQL.InputType("FileCreateOrConnectWithoutCompanyInput", {
  isAbstract: true
})
export class FileCreateOrConnectWithoutCompanyInput {
  @TypeGraphQL.Field(_type => FileWhereUniqueInput, {
    nullable: false
  })
  where!: FileWhereUniqueInput;

  @TypeGraphQL.Field(_type => FileCreateWithoutCompanyInput, {
    nullable: false
  })
  create!: FileCreateWithoutCompanyInput;
}
