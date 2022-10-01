import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntFilter } from "../inputs/BigIntFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { DecimalFilter } from "../inputs/DecimalFilter";
import { FileRelationFilter } from "../inputs/FileRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("DebitsWhereInput", {
  isAbstract: true
})
export class DebitsWhereInput {
  @TypeGraphQL.Field(_type => [DebitsWhereInput], {
    nullable: true
  })
  AND?: DebitsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [DebitsWhereInput], {
    nullable: true
  })
  OR?: DebitsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [DebitsWhereInput], {
    nullable: true
  })
  NOT?: DebitsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BigIntFilter, {
    nullable: true
  })
  id?: BigIntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  description?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalFilter, {
    nullable: true
  })
  value?: DecimalFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  date?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => FileRelationFilter, {
    nullable: true
  })
  receipt?: FileRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  fileId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;
}
