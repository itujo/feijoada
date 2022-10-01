import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DebitsWhereUniqueInput } from "../../../inputs/DebitsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneDebitsArgs {
  @TypeGraphQL.Field(_type => DebitsWhereUniqueInput, {
    nullable: false
  })
  where!: DebitsWhereUniqueInput;
}
