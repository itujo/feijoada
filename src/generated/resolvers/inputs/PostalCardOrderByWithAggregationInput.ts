import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostalCardAvgOrderByAggregateInput } from "../inputs/PostalCardAvgOrderByAggregateInput";
import { PostalCardCountOrderByAggregateInput } from "../inputs/PostalCardCountOrderByAggregateInput";
import { PostalCardMaxOrderByAggregateInput } from "../inputs/PostalCardMaxOrderByAggregateInput";
import { PostalCardMinOrderByAggregateInput } from "../inputs/PostalCardMinOrderByAggregateInput";
import { PostalCardSumOrderByAggregateInput } from "../inputs/PostalCardSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PostalCardOrderByWithAggregationInput", {
  isAbstract: true
})
export class PostalCardOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  number?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  owner?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PostalCardCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PostalCardCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PostalCardAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PostalCardAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PostalCardMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PostalCardMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PostalCardMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PostalCardMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PostalCardSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PostalCardSumOrderByAggregateInput | undefined;
}
