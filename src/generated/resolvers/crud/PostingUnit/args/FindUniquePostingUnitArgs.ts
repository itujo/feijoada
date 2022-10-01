import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostingUnitWhereUniqueInput } from "../../../inputs/PostingUnitWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniquePostingUnitArgs {
  @TypeGraphQL.Field(_type => PostingUnitWhereUniqueInput, {
    nullable: false
  })
  where!: PostingUnitWhereUniqueInput;
}
