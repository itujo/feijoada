import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumRolesFilter } from "../inputs/NestedEnumRolesFilter";
import { Roles } from "../../enums/Roles";

@TypeGraphQL.InputType("EnumRolesFilter", {
  isAbstract: true
})
export class EnumRolesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumRolesFilter, {
    nullable: true
  })
  not?: NestedEnumRolesFilter | undefined;
}
