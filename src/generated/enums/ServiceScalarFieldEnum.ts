import * as TypeGraphQL from "type-graphql";

export enum ServiceScalarFieldEnum {
  id = "id",
  name = "name",
  code = "code",
  updatedAt = "updatedAt",
  createdAt = "createdAt"
}
TypeGraphQL.registerEnumType(ServiceScalarFieldEnum, {
  name: "ServiceScalarFieldEnum",
  description: undefined,
});
