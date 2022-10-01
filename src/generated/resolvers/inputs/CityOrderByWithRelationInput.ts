import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovementOrderByRelationAggregateInput } from "../inputs/MovementOrderByRelationAggregateInput";
import { StateOrderByWithRelationInput } from "../inputs/StateOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CityOrderByWithRelationInput", {
  isAbstract: true
})
export class CityOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => StateOrderByWithRelationInput, {
    nullable: true
  })
  state?: StateOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  stateId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MovementOrderByRelationAggregateInput, {
    nullable: true
  })
  movementsOriginCity?: MovementOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MovementOrderByRelationAggregateInput, {
    nullable: true
  })
  destinationOriginCity?: MovementOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;
}
