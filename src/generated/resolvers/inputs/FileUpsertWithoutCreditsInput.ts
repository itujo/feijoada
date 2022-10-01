import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FileCreateWithoutCreditsInput } from "../inputs/FileCreateWithoutCreditsInput";
import { FileUpdateWithoutCreditsInput } from "../inputs/FileUpdateWithoutCreditsInput";

@TypeGraphQL.InputType("FileUpsertWithoutCreditsInput", {
  isAbstract: true
})
export class FileUpsertWithoutCreditsInput {
  @TypeGraphQL.Field(_type => FileUpdateWithoutCreditsInput, {
    nullable: false
  })
  update!: FileUpdateWithoutCreditsInput;

  @TypeGraphQL.Field(_type => FileCreateWithoutCreditsInput, {
    nullable: false
  })
  create!: FileCreateWithoutCreditsInput;
}
