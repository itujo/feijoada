import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostingUnitCreateInput } from "../../../inputs/PostingUnitCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePostingUnitArgs {
  @TypeGraphQL.Field(_type => PostingUnitCreateInput, {
    nullable: false
  })
  data!: PostingUnitCreateInput;
}
