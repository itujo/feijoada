import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Permissions } from "../../enums/Permissions";

@TypeGraphQL.InputType("UserCreatepermissionsInput", {
  isAbstract: true
})
export class UserCreatepermissionsInput {
  @TypeGraphQL.Field(_type => [Permissions], {
    nullable: false
  })
  set!: Array<"READ" | "CREATE" | "DELETE" | "UPDATE">;
}
