import * as TypeGraphQL from "type-graphql";

export enum StateScalarFieldEnum {
  id = "id",
  name = "name",
  updatedAt = "updatedAt",
  createdAt = "createdAt"
}
TypeGraphQL.registerEnumType(StateScalarFieldEnum, {
  name: "StateScalarFieldEnum",
  description: undefined,
});
