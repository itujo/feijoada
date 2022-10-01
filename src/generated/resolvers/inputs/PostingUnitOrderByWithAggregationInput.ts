import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostingUnitAvgOrderByAggregateInput } from "../inputs/PostingUnitAvgOrderByAggregateInput";
import { PostingUnitCountOrderByAggregateInput } from "../inputs/PostingUnitCountOrderByAggregateInput";
import { PostingUnitMaxOrderByAggregateInput } from "../inputs/PostingUnitMaxOrderByAggregateInput";
import { PostingUnitMinOrderByAggregateInput } from "../inputs/PostingUnitMinOrderByAggregateInput";
import { PostingUnitSumOrderByAggregateInput } from "../inputs/PostingUnitSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PostingUnitOrderByWithAggregationInput", {
  isAbstract: true
})
export class PostingUnitOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PostingUnitCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PostingUnitCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PostingUnitAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PostingUnitAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PostingUnitMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PostingUnitMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PostingUnitMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PostingUnitMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PostingUnitSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PostingUnitSumOrderByAggregateInput | undefined;
}
