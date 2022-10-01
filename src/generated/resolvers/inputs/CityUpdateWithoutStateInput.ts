import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { MovementUpdateManyWithoutDestinationCityNestedInput } from "../inputs/MovementUpdateManyWithoutDestinationCityNestedInput";
import { MovementUpdateManyWithoutOriginCityNestedInput } from "../inputs/MovementUpdateManyWithoutOriginCityNestedInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("CityUpdateWithoutStateInput", {
  isAbstract: true
})
export class CityUpdateWithoutStateInput {
  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => MovementUpdateManyWithoutOriginCityNestedInput, {
    nullable: true
  })
  movementsOriginCity?: MovementUpdateManyWithoutOriginCityNestedInput | undefined;

  @TypeGraphQL.Field(_type => MovementUpdateManyWithoutDestinationCityNestedInput, {
    nullable: true
  })
  destinationOriginCity?: MovementUpdateManyWithoutDestinationCityNestedInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
