import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Roles } from "../../enums/Roles";

@TypeGraphQL.InputType("EnumRolesFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumRolesFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => Roles, {
    nullable: true
  })
  set?: "ADMIN" | "MANAGER" | "SUPERVISOR" | "LEADER" | "USER" | undefined;
}
