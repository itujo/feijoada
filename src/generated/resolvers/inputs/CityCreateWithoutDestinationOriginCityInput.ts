import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovementCreateNestedManyWithoutOriginCityInput } from "../inputs/MovementCreateNestedManyWithoutOriginCityInput";
import { StateCreateNestedOneWithoutCitiesInput } from "../inputs/StateCreateNestedOneWithoutCitiesInput";

@TypeGraphQL.InputType("CityCreateWithoutDestinationOriginCityInput", {
  isAbstract: true
})
export class CityCreateWithoutDestinationOriginCityInput {
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

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;
}
