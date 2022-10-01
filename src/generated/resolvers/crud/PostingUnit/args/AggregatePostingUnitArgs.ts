import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostingUnitOrderByWithRelationInput } from "../../../inputs/PostingUnitOrderByWithRelationInput";
import { PostingUnitWhereInput } from "../../../inputs/PostingUnitWhereInput";
import { PostingUnitWhereUniqueInput } from "../../../inputs/PostingUnitWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregatePostingUnitArgs {
  @TypeGraphQL.Field(_type => PostingUnitWhereInput, {
    nullable: true
  })
  where?: PostingUnitWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PostingUnitOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PostingUnitOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PostingUnitWhereUniqueInput, {
    nullable: true
  })
  cursor?: PostingUnitWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}