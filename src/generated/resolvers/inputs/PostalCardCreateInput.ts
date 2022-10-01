import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovementCreateNestedManyWithoutPostalCardInput } from "../inputs/MovementCreateNestedManyWithoutPostalCardInput";

@TypeGraphQL.InputType("PostalCardCreateInput", {
  isAbstract: true
})
export class PostalCardCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  number!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  owner!: string;

  @TypeGraphQL.Field(_type => MovementCreateNestedManyWithoutPostalCardInput, {
    nullable: true
  })
  movements?: MovementCreateNestedManyWithoutPostalCardInput | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;
}
