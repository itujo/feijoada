import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostingUnitOrderByWithAggregationInput } from "../../../inputs/PostingUnitOrderByWithAggregationInput";
import { PostingUnitScalarWhereWithAggregatesInput } from "../../../inputs/PostingUnitScalarWhereWithAggregatesInput";
import { PostingUnitWhereInput } from "../../../inputs/PostingUnitWhereInput";
import { PostingUnitScalarFieldEnum } from "../../../../enums/PostingUnitScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPostingUnitArgs {
  @TypeGraphQL.Field(_type => PostingUnitWhereInput, {
    nullable: true
  })
  where?: PostingUnitWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PostingUnitOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PostingUnitOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostingUnitScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "updatedAt" | "createdAt">;

  @TypeGraphQL.Field(_type => PostingUnitScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PostingUnitScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
