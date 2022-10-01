import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DebitsUpdateManyMutationInput } from "../../../inputs/DebitsUpdateManyMutationInput";
import { DebitsWhereInput } from "../../../inputs/DebitsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyDebitsArgs {
  @TypeGraphQL.Field(_type => DebitsUpdateManyMutationInput, {
    nullable: false
  })
  data!: DebitsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => DebitsWhereInput, {
    nullable: true
  })
  where?: DebitsWhereInput | undefined;
}
