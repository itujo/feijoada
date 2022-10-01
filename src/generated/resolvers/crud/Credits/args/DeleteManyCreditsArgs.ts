import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CreditsWhereInput } from "../../../inputs/CreditsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCreditsArgs {
  @TypeGraphQL.Field(_type => CreditsWhereInput, {
    nullable: true
  })
  where?: CreditsWhereInput | undefined;
}
