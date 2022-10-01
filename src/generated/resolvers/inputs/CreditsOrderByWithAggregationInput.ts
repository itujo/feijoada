import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CreditsAvgOrderByAggregateInput } from "../inputs/CreditsAvgOrderByAggregateInput";
import { CreditsCountOrderByAggregateInput } from "../inputs/CreditsCountOrderByAggregateInput";
import { CreditsMaxOrderByAggregateInput } from "../inputs/CreditsMaxOrderByAggregateInput";
import { CreditsMinOrderByAggregateInput } from "../inputs/CreditsMinOrderByAggregateInput";
import { CreditsSumOrderByAggregateInput } from "../inputs/CreditsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CreditsOrderByWithAggregationInput", {
  isAbstract: true
})
export class CreditsOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => CreditsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: CreditsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CreditsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: CreditsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CreditsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: CreditsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CreditsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: CreditsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CreditsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: CreditsSumOrderByAggregateInput | undefined;
}
