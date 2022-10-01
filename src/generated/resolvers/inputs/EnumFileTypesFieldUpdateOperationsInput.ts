import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FileTypes } from "../../enums/FileTypes";

@TypeGraphQL.InputType("EnumFileTypesFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumFileTypesFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => FileTypes, {
    nullable: true
  })
  set?: "NATIONAL" | "INTERNATIONAL" | undefined;
}
