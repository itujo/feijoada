import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DebitsUpdateInput } from "../../../inputs/DebitsUpdateInput";
import { DebitsWhereUniqueInput } from "../../../inputs/DebitsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneDebitsArgs {
  @TypeGraphQL.Field(_type => DebitsUpdateInput, {
    nullable: false
  })
  data!: DebitsUpdateInput;

  @TypeGraphQL.Field(_type => DebitsWhereUniqueInput, {
    nullable: false
  })
  where!: DebitsWhereUniqueInput;
}
