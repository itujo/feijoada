import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FileTypes } from "../../enums/FileTypes";

@TypeGraphQL.InputType("NestedEnumFileTypesFilter", {
  isAbstract: true
})
export class NestedEnumFileTypesFilter {
  @TypeGraphQL.Field(_type => FileTypes, {
    nullable: true
  })
  equals?: "NATIONAL" | "INTERNATIONAL" | undefined;

  @TypeGraphQL.Field(_type => [FileTypes], {
    nullable: true
  })
  in?: Array<"NATIONAL" | "INTERNATIONAL"> | undefined;

  @TypeGraphQL.Field(_type => [FileTypes], {
    nullable: true
  })
  notIn?: Array<"NATIONAL" | "INTERNATIONAL"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumFileTypesFilter, {
    nullable: true
  })
  not?: NestedEnumFileTypesFilter | undefined;
}
