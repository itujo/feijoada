import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CreditsOrderByWithAggregationInput } from "../../../inputs/CreditsOrderByWithAggregationInput";
import { CreditsScalarWhereWithAggregatesInput } from "../../../inputs/CreditsScalarWhereWithAggregatesInput";
import { CreditsWhereInput } from "../../../inputs/CreditsWhereInput";
import { CreditsScalarFieldEnum } from "../../../../enums/CreditsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCreditsArgs {
  @TypeGraphQL.Field(_type => CreditsWhereInput, {
    nullable: true
  })
  where?: CreditsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CreditsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: CreditsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CreditsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "description" | "value" | "date" | "fileId" | "updatedAt" | "createdAt">;

  @TypeGraphQL.Field(_type => CreditsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: CreditsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
