import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DebitsCreateInput } from "../../../inputs/DebitsCreateInput";
import { DebitsUpdateInput } from "../../../inputs/DebitsUpdateInput";
import { DebitsWhereUniqueInput } from "../../../inputs/DebitsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneDebitsArgs {
  @TypeGraphQL.Field(_type => DebitsWhereUniqueInput, {
    nullable: false
  })
  where!: DebitsWhereUniqueInput;

  @TypeGraphQL.Field(_type => DebitsCreateInput, {
    nullable: false
  })
  create!: DebitsCreateInput;

  @TypeGraphQL.Field(_type => DebitsUpdateInput, {
    nullable: false
  })
  update!: DebitsUpdateInput;
}
