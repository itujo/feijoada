import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CreditsUpdateInput } from "../../../inputs/CreditsUpdateInput";
import { CreditsWhereUniqueInput } from "../../../inputs/CreditsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneCreditsArgs {
  @TypeGraphQL.Field(_type => CreditsUpdateInput, {
    nullable: false
  })
  data!: CreditsUpdateInput;

  @TypeGraphQL.Field(_type => CreditsWhereUniqueInput, {
    nullable: false
  })
  where!: CreditsWhereUniqueInput;
}
