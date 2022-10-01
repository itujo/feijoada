import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { MovementListRelationFilter } from "../inputs/MovementListRelationFilter";
import { StateRelationFilter } from "../inputs/StateRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("CityWhereInput", {
  isAbstract: true
})
export class CityWhereInput {
  @TypeGraphQL.Field(_type => [CityWhereInput], {
    nullable: true
  })
  AND?: CityWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CityWhereInput], {
    nullable: true
  })
  OR?: CityWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CityWhereInput], {
    nullable: true
  })
  NOT?: CityWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StateRelationFilter, {
    nullable: true
  })
  state?: StateRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  stateId?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => MovementListRelationFilter, {
    nullable: true
  })
  movementsOriginCity?: MovementListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MovementListRelationFilter, {
    nullable: true
  })
  destinationOriginCity?: MovementListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;
}
