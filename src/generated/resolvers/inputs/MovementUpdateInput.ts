import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntFieldUpdateOperationsInput } from "../inputs/BigIntFieldUpdateOperationsInput";
import { CityUpdateOneWithoutDestinationOriginCityNestedInput } from "../inputs/CityUpdateOneWithoutDestinationOriginCityNestedInput";
import { CityUpdateOneWithoutMovementsOriginCityNestedInput } from "../inputs/CityUpdateOneWithoutMovementsOriginCityNestedInput";
import { CompanyUpdateOneRequiredWithoutMovementsNestedInput } from "../inputs/CompanyUpdateOneRequiredWithoutMovementsNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { DecimalFieldUpdateOperationsInput } from "../inputs/DecimalFieldUpdateOperationsInput";
import { FileUpdateOneRequiredWithoutMovementsNestedInput } from "../inputs/FileUpdateOneRequiredWithoutMovementsNestedInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableDecimalFieldUpdateOperationsInput } from "../inputs/NullableDecimalFieldUpdateOperationsInput";
import { PostalCardUpdateOneRequiredWithoutMovementsNestedInput } from "../inputs/PostalCardUpdateOneRequiredWithoutMovementsNestedInput";
import { PostingUnitUpdateOneRequiredWithoutMovementsNestedInput } from "../inputs/PostingUnitUpdateOneRequiredWithoutMovementsNestedInput";
import { ServiceUpdateOneRequiredWithoutMovementsNestedInput } from "../inputs/ServiceUpdateOneRequiredWithoutMovementsNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("MovementUpdateInput", {
  isAbstract: true
})
export class MovementUpdateInput {
  @TypeGraphQL.Field(_type => BigIntFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: BigIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CompanyUpdateOneRequiredWithoutMovementsNestedInput, {
    nullable: true
  })
  centerOfCost?: CompanyUpdateOneRequiredWithoutMovementsNestedInput | undefined;

  @TypeGraphQL.Field(_type => PostalCardUpdateOneRequiredWithoutMovementsNestedInput, {
    nullable: true
  })
  postalCard?: PostalCardUpdateOneRequiredWithoutMovementsNestedInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  postingDate?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ServiceUpdateOneRequiredWithoutMovementsNestedInput, {
    nullable: true
  })
  service?: ServiceUpdateOneRequiredWithoutMovementsNestedInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  itemQty?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  weight?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DecimalFieldUpdateOperationsInput, {
    nullable: true
  })
  unitCost?: DecimalFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DecimalFieldUpdateOperationsInput, {
    nullable: true
  })
  serviceValue?: DecimalFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  documentNumber?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  label?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDecimalFieldUpdateOperationsInput, {
    nullable: true
  })
  declaredValue?: NullableDecimalFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DecimalFieldUpdateOperationsInput, {
    nullable: true
  })
  discountValue?: DecimalFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  operationalDiscountCode?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  additionalServiceCode?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PostingUnitUpdateOneRequiredWithoutMovementsNestedInput, {
    nullable: true
  })
  postingUnit?: PostingUnitUpdateOneRequiredWithoutMovementsNestedInput | undefined;

  @TypeGraphQL.Field(_type => CityUpdateOneWithoutMovementsOriginCityNestedInput, {
    nullable: true
  })
  originCity?: CityUpdateOneWithoutMovementsOriginCityNestedInput | undefined;

  @TypeGraphQL.Field(_type => CityUpdateOneWithoutDestinationOriginCityNestedInput, {
    nullable: true
  })
  destinationCity?: CityUpdateOneWithoutDestinationOriginCityNestedInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  originPostalCode?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  destinationPostalCode?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  height?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  width?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  length?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  diameter?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  realWeight?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => FileUpdateOneRequiredWithoutMovementsNestedInput, {
    nullable: true
  })
  file?: FileUpdateOneRequiredWithoutMovementsNestedInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
