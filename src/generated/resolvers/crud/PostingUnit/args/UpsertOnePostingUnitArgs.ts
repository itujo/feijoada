import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostingUnitCreateInput } from "../../../inputs/PostingUnitCreateInput";
import { PostingUnitUpdateInput } from "../../../inputs/PostingUnitUpdateInput";
import { PostingUnitWhereUniqueInput } from "../../../inputs/PostingUnitWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePostingUnitArgs {
  @TypeGraphQL.Field(_type => PostingUnitWhereUniqueInput, {
    nullable: false
  })
  where!: PostingUnitWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostingUnitCreateInput, {
    nullable: false
  })
  create!: PostingUnitCreateInput;

  @TypeGraphQL.Field(_type => PostingUnitUpdateInput, {
    nullable: false
  })
  update!: PostingUnitUpdateInput;
}
