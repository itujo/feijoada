import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { MovementListRelationFilter } from "../inputs/MovementListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("PostalCardWhereInput", {
  isAbstract: true
})
export class PostalCardWhereInput {
  @TypeGraphQL.Field(_type => [PostalCardWhereInput], {
    nullable: true
  })
  AND?: PostalCardWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostalCardWhereInput], {
    nullable: true
  })
  OR?: PostalCardWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostalCardWhereInput], {
    nullable: true
  })
  NOT?: PostalCardWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  number?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  owner?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => MovementListRelationFilter, {
    nullable: true
  })
  movements?: MovementListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;
}
