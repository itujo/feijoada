import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CityOrderByWithRelationInput } from "../inputs/CityOrderByWithRelationInput";
import { CompanyOrderByWithRelationInput } from "../inputs/CompanyOrderByWithRelationInput";
import { FileOrderByWithRelationInput } from "../inputs/FileOrderByWithRelationInput";
import { PostalCardOrderByWithRelationInput } from "../inputs/PostalCardOrderByWithRelationInput";
import { PostingUnitOrderByWithRelationInput } from "../inputs/PostingUnitOrderByWithRelationInput";
import { ServiceOrderByWithRelationInput } from "../inputs/ServiceOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MovementOrderByWithRelationInput", {
  isAbstract: true
})
export class MovementOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CompanyOrderByWithRelationInput, {
    nullable: true
  })
  centerOfCost?: CompanyOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  centerOfCostId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PostalCardOrderByWithRelationInput, {
    nullable: true
  })
  postalCard?: PostalCardOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  postalCardId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  postingDate?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ServiceOrderByWithRelationInput, {
    nullable: true
  })
  service?: ServiceOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  serviceId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  itemQty?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  weight?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  unitCost?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  serviceValue?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  documentNumber?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  label?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  declaredValue?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  discountValue?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  operationalDiscountCode?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  additionalServiceCode?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PostingUnitOrderByWithRelationInput, {
    nullable: true
  })
  postingUnit?: PostingUnitOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  postingUnitId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CityOrderByWithRelationInput, {
    nullable: true
  })
  originCity?: CityOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  originCityId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CityOrderByWithRelationInput, {
    nullable: true
  })
  destinationCity?: CityOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  destinationCityId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  originPostalCode?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  destinationPostalCode?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  height?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  width?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  length?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  diameter?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  realWeight?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => FileOrderByWithRelationInput, {
    nullable: true
  })
  file?: FileOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  fileId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;
}
