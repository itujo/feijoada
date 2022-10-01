import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovementCreateNestedManyWithoutDestinationCityInput } from "../inputs/MovementCreateNestedManyWithoutDestinationCityInput";
import { MovementCreateNestedManyWithoutOriginCityInput } from "../inputs/MovementCreateNestedManyWithoutOriginCityInput";
import { StateCreateNestedOneWithoutCitiesInput } from "../inputs/StateCreateNestedOneWithoutCitiesInput";

@TypeGraphQL.InputType("CityCreateInput", {
  isAbstract: true
})
export class CityCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => StateCreateNestedOneWithoutCitiesInput, {
    nullable: true
  })
  state?: StateCreateNestedOneWithoutCitiesInput | undefined;

  @TypeGraphQL.Field(_type => MovementCreateNestedManyWithoutOriginCityInput, {
    nullable: true
  })
  movementsOriginCity?: MovementCreateNestedManyWithoutOriginCityInput | undefined;

  @TypeGraphQL.Field(_type => MovementCreateNestedManyWithoutDestinationCityInput, {
    nullable: true
  })
  destinationOriginCity?: MovementCreateNestedManyWithoutDestinationCityInput | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;
}
