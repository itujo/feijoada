import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovementCreateWithoutPostalCardInput } from "../inputs/MovementCreateWithoutPostalCardInput";
import { MovementWhereUniqueInput } from "../inputs/MovementWhereUniqueInput";

@TypeGraphQL.InputType("MovementCreateOrConnectWithoutPostalCardInput", {
  isAbstract: true
})
export class MovementCreateOrConnectWithoutPostalCardInput {
  @TypeGraphQL.Field(_type => MovementWhereUniqueInput, {
    nullable: false
  })
  where!: MovementWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovementCreateWithoutPostalCardInput, {
    nullable: false
  })
  create!: MovementCreateWithoutPostalCardInput;
}
