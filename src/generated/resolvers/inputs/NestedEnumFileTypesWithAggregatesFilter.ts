import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumFileTypesFilter } from "../inputs/NestedEnumFileTypesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { FileTypes } from "../../enums/FileTypes";

@TypeGraphQL.InputType("NestedEnumFileTypesWithAggregatesFilter", {
  isAbstract: true
})
export class NestedEnumFileTypesWithAggregatesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumFileTypesWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumFileTypesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumFileTypesFilter, {
    nullable: true
  })
  _min?: NestedEnumFileTypesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumFileTypesFilter, {
    nullable: true
  })
  _max?: NestedEnumFileTypesFilter | undefined;
}
