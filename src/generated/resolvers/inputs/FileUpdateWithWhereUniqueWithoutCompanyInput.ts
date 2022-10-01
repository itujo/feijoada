import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FileUpdateWithoutCompanyInput } from "../inputs/FileUpdateWithoutCompanyInput";
import { FileWhereUniqueInput } from "../inputs/FileWhereUniqueInput";

@TypeGraphQL.InputType("FileUpdateWithWhereUniqueWithoutCompanyInput", {
  isAbstract: true
})
export class FileUpdateWithWhereUniqueWithoutCompanyInput {
  @TypeGraphQL.Field(_type => FileWhereUniqueInput, {
    nullable: false
  })
  where!: FileWhereUniqueInput;

  @TypeGraphQL.Field(_type => FileUpdateWithoutCompanyInput, {
    nullable: false
  })
  data!: FileUpdateWithoutCompanyInput;
}
