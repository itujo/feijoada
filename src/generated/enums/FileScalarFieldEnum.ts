import * as TypeGraphQL from "type-graphql";

export enum FileScalarFieldEnum {
  id = "id",
  name = "name",
  date = "date",
  companyId = "companyId",
  processed = "processed",
  movementsProcessed = "movementsProcessed",
  creditsProcessed = "creditsProcessed",
  debitsProcessed = "debitsProcessed",
  fileType = "fileType",
  updatedAt = "updatedAt",
  createdAt = "createdAt"
}
TypeGraphQL.registerEnumType(FileScalarFieldEnum, {
  name: "FileScalarFieldEnum",
  description: undefined,
});
