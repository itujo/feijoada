import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CreditsUpdateManyMutationInput } from "../../../inputs/CreditsUpdateManyMutationInput";
import { CreditsWhereInput } from "../../../inputs/CreditsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCreditsArgs {
  @TypeGraphQL.Field(_type => CreditsUpdateManyMutationInput, {
    nullable: false
  })
  data!: CreditsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CreditsWhereInput, {
    nullable: true
  })
  where?: CreditsWhereInput | undefined;
}
