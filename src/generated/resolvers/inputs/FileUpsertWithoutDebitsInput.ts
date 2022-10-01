import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FileCreateWithoutDebitsInput } from "../inputs/FileCreateWithoutDebitsInput";
import { FileUpdateWithoutDebitsInput } from "../inputs/FileUpdateWithoutDebitsInput";

@TypeGraphQL.InputType("FileUpsertWithoutDebitsInput", {
  isAbstract: true
})
export class FileUpsertWithoutDebitsInput {
  @TypeGraphQL.Field(_type => FileUpdateWithoutDebitsInput, {
    nullable: false
  })
  update!: FileUpdateWithoutDebitsInput;

  @TypeGraphQL.Field(_type => FileCreateWithoutDebitsInput, {
    nullable: false
  })
  create!: FileCreateWithoutDebitsInput;
}
