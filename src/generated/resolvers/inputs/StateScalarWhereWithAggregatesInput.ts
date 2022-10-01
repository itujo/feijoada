import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";

@TypeGraphQL.InputType("StateScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class StateScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [StateScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: StateScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [StateScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: StateScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [StateScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: StateScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  name?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;
}
