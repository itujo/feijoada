import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CreditsCreateInput } from "../../../inputs/CreditsCreateInput";
import { CreditsUpdateInput } from "../../../inputs/CreditsUpdateInput";
import { CreditsWhereUniqueInput } from "../../../inputs/CreditsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneCreditsArgs {
  @TypeGraphQL.Field(_type => CreditsWhereUniqueInput, {
    nullable: false
  })
  where!: CreditsWhereUniqueInput;

  @TypeGraphQL.Field(_type => CreditsCreateInput, {
    nullable: false
  })
  create!: CreditsCreateInput;

  @TypeGraphQL.Field(_type => CreditsUpdateInput, {
    nullable: false
  })
  update!: CreditsUpdateInput;
}
