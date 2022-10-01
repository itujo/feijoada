import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovementCreateWithoutDestinationCityInput } from "../inputs/MovementCreateWithoutDestinationCityInput";
import { MovementWhereUniqueInput } from "../inputs/MovementWhereUniqueInput";

@TypeGraphQL.InputType("MovementCreateOrConnectWithoutDestinationCityInput", {
  isAbstract: true
})
export class MovementCreateOrConnectWithoutDestinationCityInput {
  @TypeGraphQL.Field(_type => MovementWhereUniqueInput, {
    nullable: false
  })
  where!: MovementWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovementCreateWithoutDestinationCityInput, {
    nullable: false
  })
  create!: MovementCreateWithoutDestinationCityInput;
}
