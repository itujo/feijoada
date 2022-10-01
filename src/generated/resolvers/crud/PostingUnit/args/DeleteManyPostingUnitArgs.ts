import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostingUnitWhereInput } from "../../../inputs/PostingUnitWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPostingUnitArgs {
  @TypeGraphQL.Field(_type => PostingUnitWhereInput, {
    nullable: true
  })
  where?: PostingUnitWhereInput | undefined;
}
