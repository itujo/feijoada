import * as TypeGraphQL from "type-graphql";

export enum FileTypes {
  NATIONAL = "NATIONAL",
  INTERNATIONAL = "INTERNATIONAL"
}
TypeGraphQL.registerEnumType(FileTypes, {
  name: "FileTypes",
  description: undefined,
});
