import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostingUnitCreateManyInput } from "../../../inputs/PostingUnitCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPostingUnitArgs {
  @TypeGraphQL.Field(_type => [PostingUnitCreateManyInput], {
    nullable: false
  })
  data!: PostingUnitCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
