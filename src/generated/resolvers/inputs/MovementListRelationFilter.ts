import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovementWhereInput } from "../inputs/MovementWhereInput";

@TypeGraphQL.InputType("MovementListRelationFilter", {
  isAbstract: true
})
export class MovementListRelationFilter {
  @TypeGraphQL.Field(_type => MovementWhereInput, {
    nullable: true
  })
  every?: MovementWhereInput | undefined;

  @TypeGraphQL.Field(_type => MovementWhereInput, {
    nullable: true
  })
  some?: MovementWhereInput | undefined;

  @TypeGraphQL.Field(_type => MovementWhereInput, {
    nullable: true
  })
  none?: MovementWhereInput | undefined;
}
