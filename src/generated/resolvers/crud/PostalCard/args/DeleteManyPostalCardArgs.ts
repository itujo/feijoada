import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostalCardWhereInput } from "../../../inputs/PostalCardWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPostalCardArgs {
  @TypeGraphQL.Field(_type => PostalCardWhereInput, {
    nullable: true
  })
  where?: PostalCardWhereInput | undefined;
}
