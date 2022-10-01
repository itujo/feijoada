import * as TypeGraphQL from "type-graphql";

export enum DebitsScalarFieldEnum {
  id = "id",
  description = "description",
  value = "value",
  date = "date",
  fileId = "fileId",
  updatedAt = "updatedAt",
  createdAt = "createdAt"
}
TypeGraphQL.registerEnumType(DebitsScalarFieldEnum, {
  name: "DebitsScalarFieldEnum",
  description: undefined,
});
