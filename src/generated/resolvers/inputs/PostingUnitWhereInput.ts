import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { MovementListRelationFilter } from "../inputs/MovementListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("PostingUnitWhereInput", {
  isAbstract: true
})
export class PostingUnitWhereInput {
  @TypeGraphQL.Field(_type => [PostingUnitWhereInput], {
    nullable: true
  })
  AND?: PostingUnitWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostingUnitWhereInput], {
    nullable: true
  })
  OR?: PostingUnitWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostingUnitWhereInput], {
    nullable: true
  })
  NOT?: PostingUnitWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

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
