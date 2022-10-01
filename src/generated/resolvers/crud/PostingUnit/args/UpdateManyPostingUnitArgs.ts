import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostingUnitUpdateManyMutationInput } from "../../../inputs/PostingUnitUpdateManyMutationInput";
import { PostingUnitWhereInput } from "../../../inputs/PostingUnitWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPostingUnitArgs {
  @TypeGraphQL.Field(_type => PostingUnitUpdateManyMutationInput, {
    nullable: false
  })
  data!: PostingUnitUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PostingUnitWhereInput, {
    nullable: true
  })
  where?: PostingUnitWhereInput | undefined;
}
