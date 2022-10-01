import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DebitsOrderByWithAggregationInput } from "../../../inputs/DebitsOrderByWithAggregationInput";
import { DebitsScalarWhereWithAggregatesInput } from "../../../inputs/DebitsScalarWhereWithAggregatesInput";
import { DebitsWhereInput } from "../../../inputs/DebitsWhereInput";
import { DebitsScalarFieldEnum } from "../../../../enums/DebitsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByDebitsArgs {
  @TypeGraphQL.Field(_type => DebitsWhereInput, {
    nullable: true
  })
  where?: DebitsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [DebitsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: DebitsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [DebitsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "description" | "value" | "date" | "fileId" | "updatedAt" | "createdAt">;

  @TypeGraphQL.Field(_type => DebitsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: DebitsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
