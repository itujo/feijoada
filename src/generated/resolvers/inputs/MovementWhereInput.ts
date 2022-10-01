import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntFilter } from "../inputs/BigIntFilter";
import { CityRelationFilter } from "../inputs/CityRelationFilter";
import { CompanyRelationFilter } from "../inputs/CompanyRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DecimalFilter } from "../inputs/DecimalFilter";
import { DecimalNullableFilter } from "../inputs/DecimalNullableFilter";
import { FileRelationFilter } from "../inputs/FileRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { PostalCardRelationFilter } from "../inputs/PostalCardRelationFilter";
import { PostingUnitRelationFilter } from "../inputs/PostingUnitRelationFilter";
import { ServiceRelationFilter } from "../inputs/ServiceRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("MovementWhereInput", {
  isAbstract: true
})
export class MovementWhereInput {
  @TypeGraphQL.Field(_type => [MovementWhereInput], {
    nullable: true
  })
  AND?: MovementWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovementWhereInput], {
    nullable: true
  })
  OR?: MovementWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovementWhereInput], {
    nullable: true
  })
  NOT?: MovementWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BigIntFilter, {
    nullable: true
  })
  id?: BigIntFilter | undefined;

  @TypeGraphQL.Field(_type => CompanyRelationFilter, {
    nullable: true
  })
  centerOfCost?: CompanyRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  centerOfCostId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => PostalCardRelationFilter, {
    nullable: true
  })
  postalCard?: PostalCardRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  postalCardId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  postingDate?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => ServiceRelationFilter, {
    nullable: true
  })
  service?: ServiceRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  serviceId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  itemQty?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  weight?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalFilter, {
    nullable: true
  })
  unitCost?: DecimalFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalFilter, {
    nullable: true
  })
  serviceValue?: DecimalFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  documentNumber?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  label?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalNullableFilter, {
    nullable: true
  })
  declaredValue?: DecimalNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalFilter, {
    nullable: true
  })
  discountValue?: DecimalFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  operationalDiscountCode?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  additionalServiceCode?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => PostingUnitRelationFilter, {
    nullable: true
  })
  postingUnit?: PostingUnitRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  postingUnitId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => CityRelationFilter, {
    nullable: true
  })
  originCity?: CityRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  originCityId?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => CityRelationFilter, {
    nullable: true
  })
  destinationCity?: CityRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  destinationCityId?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  originPostalCode?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  destinationPostalCode?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  height?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  width?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  length?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  diameter?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  realWeight?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => FileRelationFilter, {
    nullable: true
  })
  file?: FileRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  fileId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;
}
