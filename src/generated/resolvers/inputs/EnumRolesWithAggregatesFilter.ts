import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumRolesFilter } from "../inputs/NestedEnumRolesFilter";
import { NestedEnumRolesWithAggregatesFilter } from "../inputs/NestedEnumRolesWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { Roles } from "../../enums/Roles";

@TypeGraphQL.InputType("EnumRolesWithAggregatesFilter", {
  isAbstract: true
})
export class EnumRolesWithAggregatesFilter {
  @TypeGraphQL.Field(_type => Roles, {
    nullable: true
  })
  equals?: "ADMIN" | "MANAGER" | "SUPERVISOR" | "LEADER" | "USER" | undefined;

  @TypeGraphQL.Field(_type => [Roles], {
    nullable: true
  })
  in?: Array<"ADMIN" | "MANAGER" | "SUPERVISOR" | "LEADER" | "USER"> | undefined;

  @TypeGraphQL.Field(_type => [Roles], {
    nullable: true
  })
  notIn?: Array<"ADMIN" | "MANAGER" | "SUPERVISOR" | "LEADER" | "USER"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumRolesWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumRolesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumRolesFilter, {
    nullable: true
  })
  _min?: NestedEnumRolesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumRolesFilter, {
    nullable: true
  })
  _max?: NestedEnumRolesFilter | undefined;
}
