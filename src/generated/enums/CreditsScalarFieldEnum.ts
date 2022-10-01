import * as TypeGraphQL from "type-graphql";

export enum CreditsScalarFieldEnum {
  id = "id",
  description = "description",
  value = "value",
  date = "date",
  fileId = "fileId",
  updatedAt = "updatedAt",
  createdAt = "createdAt"
}
TypeGraphQL.registerEnumType(CreditsScalarFieldEnum, {
  name: "CreditsScalarFieldEnum",
  description: undefined,
});
