import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovementUpdateWithoutDestinationCityInput } from "../inputs/MovementUpdateWithoutDestinationCityInput";
import { MovementWhereUniqueInput } from "../inputs/MovementWhereUniqueInput";

@TypeGraphQL.InputType("MovementUpdateWithWhereUniqueWithoutDestinationCityInput", {
  isAbstract: true
})
export class MovementUpdateWithWhereUniqueWithoutDestinationCityInput {
  @TypeGraphQL.Field(_type => MovementWhereUniqueInput, {
    nullable: false
  })
  where!: MovementWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovementUpdateWithoutDestinationCityInput, {
    nullable: false
  })
  data!: MovementUpdateWithoutDestinationCityInput;
}
