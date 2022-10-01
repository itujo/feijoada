import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostalCardWhereUniqueInput } from "../../../inputs/PostalCardWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOnePostalCardArgs {
  @TypeGraphQL.Field(_type => PostalCardWhereUniqueInput, {
    nullable: false
  })
  where!: PostalCardWhereUniqueInput;
}
