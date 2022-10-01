import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FileCreateWithoutCompanyInput } from "../inputs/FileCreateWithoutCompanyInput";
import { FileUpdateWithoutCompanyInput } from "../inputs/FileUpdateWithoutCompanyInput";
import { FileWhereUniqueInput } from "../inputs/FileWhereUniqueInput";

@TypeGraphQL.InputType("FileUpsertWithWhereUniqueWithoutCompanyInput", {
  isAbstract: true
})
export class FileUpsertWithWhereUniqueWithoutCompanyInput {
  @TypeGraphQL.Field(_type => FileWhereUniqueInput, {
    nullable: false
  })
  where!: FileWhereUniqueInput;

  @TypeGraphQL.Field(_type => FileUpdateWithoutCompanyInput, {
    nullable: false
  })
  update!: FileUpdateWithoutCompanyInput;

  @TypeGraphQL.Field(_type => FileCreateWithoutCompanyInput, {
    nullable: false
  })
  create!: FileCreateWithoutCompanyInput;
}
