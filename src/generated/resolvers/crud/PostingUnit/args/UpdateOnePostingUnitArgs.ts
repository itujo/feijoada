import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostingUnitUpdateInput } from "../../../inputs/PostingUnitUpdateInput";
import { PostingUnitWhereUniqueInput } from "../../../inputs/PostingUnitWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePostingUnitArgs {
  @TypeGraphQL.Field(_type => PostingUnitUpdateInput, {
    nullable: false
  })
  data!: PostingUnitUpdateInput;

  @TypeGraphQL.Field(_type => PostingUnitWhereUniqueInput, {
    nullable: false
  })
  where!: PostingUnitWhereUniqueInput;
}
