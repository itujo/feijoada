import * as TypeGraphQL from "type-graphql";

export enum Permissions {
  READ = "READ",
  CREATE = "CREATE",
  DELETE = "DELETE",
  UPDATE = "UPDATE"
}
TypeGraphQL.registerEnumType(Permissions, {
  name: "Permissions",
  description: undefined,
});
