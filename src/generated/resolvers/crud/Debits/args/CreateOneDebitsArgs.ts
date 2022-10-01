import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DebitsCreateInput } from "../../../inputs/DebitsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneDebitsArgs {
  @TypeGraphQL.Field(_type => DebitsCreateInput, {
    nullable: false
  })
  data!: DebitsCreateInput;
}
