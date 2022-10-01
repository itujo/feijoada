import * as TypeGraphQL from "type-graphql";

export enum MovementScalarFieldEnum {
  id = "id",
  centerOfCostId = "centerOfCostId",
  postalCardId = "postalCardId",
  postingDate = "postingDate",
  serviceId = "serviceId",
  itemQty = "itemQty",
  weight = "weight",
  unitCost = "unitCost",
  serviceValue = "serviceValue",
  documentNumber = "documentNumber",
  label = "label",
  declaredValue = "declaredValue",
  discountValue = "discountValue",
  operationalDiscountCode = "operationalDiscountCode",
  additionalServiceCode = "additionalServiceCode",
  postingUnitId = "postingUnitId",
  originCityId = "originCityId",
  destinationCityId = "destinationCityId",
  originPostalCode = "originPostalCode",
  destinationPostalCode = "destinationPostalCode",
  height = "height",
  width = "width",
  length = "length",
  diameter = "diameter",
  realWeight = "realWeight",
  fileId = "fileId",
  updatedAt = "updatedAt",
  createdAt = "createdAt"
}
TypeGraphQL.registerEnumType(MovementScalarFieldEnum, {
  name: "MovementScalarFieldEnum",
  description: undefined,
});
