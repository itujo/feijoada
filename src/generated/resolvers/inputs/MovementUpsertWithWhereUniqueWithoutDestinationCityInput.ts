import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovementCreateWithoutDestinationCityInput } from "../inputs/MovementCreateWithoutDestinationCityInput";
import { MovementUpdateWithoutDestinationCityInput } from "../inputs/MovementUpdateWithoutDestinationCityInput";
import { MovementWhereUniqueInput } from "../inputs/MovementWhereUniqueInput";

@TypeGraphQL.InputType("MovementUpsertWithWhereUniqueWithoutDestinationCityInput", {
  isAbstract: true
})
export class MovementUpsertWithWhereUniqueWithoutDestinationCityInput {
  @TypeGraphQL.Field(_type => MovementWhereUniqueInput, {
    nullable: false
  })
  where!: MovementWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovementUpdateWithoutDestinationCityInput, {
    nullable: false
  })
  update!: MovementUpdateWithoutDestinationCityInput;

  @TypeGraphQL.Field(_type => MovementCreateWithoutDestinationCityInput, {
    nullable: false
  })
  create!: MovementCreateWithoutDestinationCityInput;
}
