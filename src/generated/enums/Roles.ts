import * as TypeGraphQL from "type-graphql";

export enum Roles {
  ADMIN = "ADMIN",
  MANAGER = "MANAGER",
  SUPERVISOR = "SUPERVISOR",
  LEADER = "LEADER",
  USER = "USER"
}
TypeGraphQL.registerEnumType(Roles, {
  name: "Roles",
  description: undefined,
});
