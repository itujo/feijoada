import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostalCardOrderByWithAggregationInput } from "../../../inputs/PostalCardOrderByWithAggregationInput";
import { PostalCardScalarWhereWithAggregatesInput } from "../../../inputs/PostalCardScalarWhereWithAggregatesInput";
import { PostalCardWhereInput } from "../../../inputs/PostalCardWhereInput";
import { PostalCardScalarFieldEnum } from "../../../../enums/PostalCardScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPostalCardArgs {
  @TypeGraphQL.Field(_type => PostalCardWhereInput, {
    nullable: true
  })
  where?: PostalCardWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PostalCardOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PostalCardOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostalCardScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "number" | "owner" | "updatedAt" | "createdAt">;

  @TypeGraphQL.Field(_type => PostalCardScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PostalCardScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
