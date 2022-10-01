import * as TypeGraphQL from "type-graphql";

export enum CityScalarFieldEnum {
  id = "id",
  name = "name",
  stateId = "stateId",
  updatedAt = "updatedAt",
  createdAt = "createdAt"
}
TypeGraphQL.registerEnumType(CityScalarFieldEnum, {
  name: "CityScalarFieldEnum",
  description: undefined,
});
