import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Roles } from "../../enums/Roles";

@TypeGraphQL.InputType("NestedEnumRolesFilter", {
  isAbstract: true
})
export class NestedEnumRolesFilter {
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
