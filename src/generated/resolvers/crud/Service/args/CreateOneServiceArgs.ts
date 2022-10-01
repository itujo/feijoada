import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ServiceCreateInput } from "../../../inputs/ServiceCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneServiceArgs {
  @TypeGraphQL.Field(_type => ServiceCreateInput, {
    nullable: false
  })
  data!: ServiceCreateInput;
}
