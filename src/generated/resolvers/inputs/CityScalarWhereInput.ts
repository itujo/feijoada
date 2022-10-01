import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("CityScalarWhereInput", {
  isAbstract: true
})
export class CityScalarWhereInput {
  @TypeGraphQL.Field(_type => [CityScalarWhereInput], {
    nullable: true
  })
  AND?: CityScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CityScalarWhereInput], {
    nullable: true
  })
  OR?: CityScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CityScalarWhereInput], {
    nullable: true
  })
  NOT?: CityScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  stateId?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;
}
