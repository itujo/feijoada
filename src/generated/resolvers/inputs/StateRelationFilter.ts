import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StateWhereInput } from "../inputs/StateWhereInput";

@TypeGraphQL.InputType("StateRelationFilter", {
  isAbstract: true
})
export class StateRelationFilter {
  @TypeGraphQL.Field(_type => StateWhereInput, {
    nullable: true
  })
  is?: StateWhereInput | undefined;

  @TypeGraphQL.Field(_type => StateWhereInput, {
    nullable: true
  })
  isNot?: StateWhereInput | undefined;
}
