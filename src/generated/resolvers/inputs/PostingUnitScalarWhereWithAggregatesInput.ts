import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("PostingUnitScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class PostingUnitScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PostingUnitScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PostingUnitScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostingUnitScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PostingUnitScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostingUnitScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PostingUnitScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;
}
