import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DebitsWhereInput } from "../../../inputs/DebitsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyDebitsArgs {
  @TypeGraphQL.Field(_type => DebitsWhereInput, {
    nullable: true
  })
  where?: DebitsWhereInput | undefined;
}
