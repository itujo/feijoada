import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FileCreateWithoutMovementsInput } from "../inputs/FileCreateWithoutMovementsInput";
import { FileUpdateWithoutMovementsInput } from "../inputs/FileUpdateWithoutMovementsInput";

@TypeGraphQL.InputType("FileUpsertWithoutMovementsInput", {
  isAbstract: true
})
export class FileUpsertWithoutMovementsInput {
  @TypeGraphQL.Field(_type => FileUpdateWithoutMovementsInput, {
    nullable: false
  })
  update!: FileUpdateWithoutMovementsInput;

  @TypeGraphQL.Field(_type => FileCreateWithoutMovementsInput, {
    nullable: false
  })
  create!: FileCreateWithoutMovementsInput;
}
