import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostalCardCreateInput } from "../../../inputs/PostalCardCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePostalCardArgs {
  @TypeGraphQL.Field(_type => PostalCardCreateInput, {
    nullable: false
  })
  data!: PostalCardCreateInput;
}
