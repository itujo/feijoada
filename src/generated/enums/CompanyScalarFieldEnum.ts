import * as TypeGraphQL from "type-graphql";

export enum CompanyScalarFieldEnum {
  id = "id",
  cnpj = "cnpj",
  name = "name",
  clientCode = "clientCode",
  contractNumber = "contractNumber",
  contractDr = "contractDr",
  updatedAt = "updatedAt",
  createdAt = "createdAt"
}
TypeGraphQL.registerEnumType(CompanyScalarFieldEnum, {
  name: "CompanyScalarFieldEnum",
  description: undefined,
});
