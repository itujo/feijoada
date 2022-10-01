import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CreditsWhereUniqueInput } from "../../../inputs/CreditsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneCreditsArgs {
  @TypeGraphQL.Field(_type => CreditsWhereUniqueInput, {
    nullable: false
  })
  where!: CreditsWhereUniqueInput;
}
