import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Permissions } from "../../enums/Permissions";

@TypeGraphQL.InputType("UserUpdatepermissionsInput", {
  isAbstract: true
})
export class UserUpdatepermissionsInput {
  @TypeGraphQL.Field(_type => [Permissions], {
    nullable: true
  })
  set?: Array<"READ" | "CREATE" | "DELETE" | "UPDATE"> | undefined;

  @TypeGraphQL.Field(_type => [Permissions], {
    nullable: true
  })
  push?: Array<"READ" | "CREATE" | "DELETE" | "UPDATE"> | undefined;
}
