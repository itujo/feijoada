import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DebitsAvgOrderByAggregateInput } from "../inputs/DebitsAvgOrderByAggregateInput";
import { DebitsCountOrderByAggregateInput } from "../inputs/DebitsCountOrderByAggregateInput";
import { DebitsMaxOrderByAggregateInput } from "../inputs/DebitsMaxOrderByAggregateInput";
import { DebitsMinOrderByAggregateInput } from "../inputs/DebitsMinOrderByAggregateInput";
import { DebitsSumOrderByAggregateInput } from "../inputs/DebitsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("DebitsOrderByWithAggregationInput", {
  isAbstract: true
})
export class DebitsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  value?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  date?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  fileId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => DebitsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: DebitsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => DebitsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: DebitsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => DebitsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: DebitsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => DebitsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: DebitsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => DebitsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: DebitsSumOrderByAggregateInput | undefined;
}
