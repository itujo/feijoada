import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Permissions } from "../../enums/Permissions";

@TypeGraphQL.InputType("EnumPermissionsNullableListFilter", {
  isAbstract: true
})
export class EnumPermissionsNullableListFilter {
  @TypeGraphQL.Field(_type => [Permissions], {
    nullable: true
  })
  equals?: Array<"READ" | "CREATE" | "DELETE" | "UPDATE"> | undefined;

  @TypeGraphQL.Field(_type => Permissions, {
    nullable: true
  })
  has?: "READ" | "CREATE" | "DELETE" | "UPDATE" | undefined;

  @TypeGraphQL.Field(_type => [Permissions], {
    nullable: true
  })
  hasEvery?: Array<"READ" | "CREATE" | "DELETE" | "UPDATE"> | undefined;

  @TypeGraphQL.Field(_type => [Permissions], {
    nullable: true
  })
  hasSome?: Array<"READ" | "CREATE" | "DELETE" | "UPDATE"> | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isEmpty?: boolean | undefined;
}
