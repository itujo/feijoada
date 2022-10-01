import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { MovementUpdateManyWithoutOriginCityNestedInput } from "../inputs/MovementUpdateManyWithoutOriginCityNestedInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StateUpdateOneWithoutCitiesNestedInput } from "../inputs/StateUpdateOneWithoutCitiesNestedInput";

@TypeGraphQL.InputType("CityUpdateWithoutDestinationOriginCityInput", {
  isAbstract: true
})
export class CityUpdateWithoutDestinationOriginCityInput {
  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StateUpdateOneWithoutCitiesNestedInput, {
    nullable: true
  })
  state?: StateUpdateOneWithoutCitiesNestedInput | undefined;

  @TypeGraphQL.Field(_type => MovementUpdateManyWithoutOriginCityNestedInput, {
    nullable: true
  })
  movementsOriginCity?: MovementUpdateManyWithoutOriginCityNestedInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
