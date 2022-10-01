import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CompanyOrderByWithRelationInput } from "../inputs/CompanyOrderByWithRelationInput";
import { CreditsOrderByRelationAggregateInput } from "../inputs/CreditsOrderByRelationAggregateInput";
import { DebitsOrderByRelationAggregateInput } from "../inputs/DebitsOrderByRelationAggregateInput";
import { MovementOrderByRelationAggregateInput } from "../inputs/MovementOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("FileOrderByWithRelationInput", {
  isAbstract: true
})
export class FileOrderByWithRelationInput {
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
  date?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => DebitsOrderByRelationAggregateInput, {
    nullable: true
  })
  debits?: DebitsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CreditsOrderByRelationAggregateInput, {
    nullable: true
  })
  credits?: CreditsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MovementOrderByRelationAggregateInput, {
    nullable: true
  })
  movements?: MovementOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CompanyOrderByWithRelationInput, {
    nullable: true
  })
  company?: CompanyOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  companyId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  processed?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  movementsProcessed?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  creditsProcessed?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  debitsProcessed?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  fileType?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;
}
