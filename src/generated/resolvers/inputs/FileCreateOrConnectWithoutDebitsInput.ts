import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FileCreateWithoutDebitsInput } from "../inputs/FileCreateWithoutDebitsInput";
import { FileWhereUniqueInput } from "../inputs/FileWhereUniqueInput";

@TypeGraphQL.InputType("FileCreateOrConnectWithoutDebitsInput", {
  isAbstract: true
})
export class FileCreateOrConnectWithoutDebitsInput {
  @TypeGraphQL.Field(_type => FileWhereUniqueInput, {
    nullable: false
  })
  where!: FileWhereUniqueInput;

  @TypeGraphQL.Field(_type => FileCreateWithoutDebitsInput, {
    nullable: false
  })
  create!: FileCreateWithoutDebitsInput;
}
