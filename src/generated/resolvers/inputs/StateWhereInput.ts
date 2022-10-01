import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CityListRelationFilter } from "../inputs/CityListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("StateWhereInput", {
  isAbstract: true
})
export class StateWhereInput {
  @TypeGraphQL.Field(_type => [StateWhereInput], {
    nullable: true
  })
  AND?: StateWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [StateWhereInput], {
    nullable: true
  })
  OR?: StateWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [StateWhereInput], {
    nullable: true
  })
  NOT?: StateWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => CityListRelationFilter, {
    nullable: true
  })
  cities?: CityListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;
}
