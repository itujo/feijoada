import * as TypeGraphQL from "type-graphql";

export enum PostalCardScalarFieldEnum {
  id = "id",
  number = "number",
  owner = "owner",
  updatedAt = "updatedAt",
  createdAt = "createdAt"
}
TypeGraphQL.registerEnumType(PostalCardScalarFieldEnum, {
  name: "PostalCardScalarFieldEnum",
  description: undefined,
});
