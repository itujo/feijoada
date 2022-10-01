import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { MovementListRelationFilter } from "../inputs/MovementListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ServiceWhereInput", {
  isAbstract: true
})
export class ServiceWhereInput {
  @TypeGraphQL.Field(_type => [ServiceWhereInput], {
    nullable: true
  })
  AND?: ServiceWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ServiceWhereInput], {
    nullable: true
  })
  OR?: ServiceWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ServiceWhereInput], {
    nullable: true
  })
  NOT?: ServiceWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  code?: IntFilter | undefined;

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
