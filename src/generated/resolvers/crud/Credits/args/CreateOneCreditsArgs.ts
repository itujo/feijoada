import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CreditsCreateInput } from "../../../inputs/CreditsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneCreditsArgs {
  @TypeGraphQL.Field(_type => CreditsCreateInput, {
    nullable: false
  })
  data!: CreditsCreateInput;
}
