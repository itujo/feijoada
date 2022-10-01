import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DebitsWhereInput } from "../inputs/DebitsWhereInput";

@TypeGraphQL.InputType("DebitsListRelationFilter", {
  isAbstract: true
})
export class DebitsListRelationFilter {
  @TypeGraphQL.Field(_type => DebitsWhereInput, {
    nullable: true
  })
  every?: DebitsWhereInput | undefined;

  @TypeGraphQL.Field(_type => DebitsWhereInput, {
    nullable: true
  })
  some?: DebitsWhereInput | undefined;

  @TypeGraphQL.Field(_type => DebitsWhereInput, {
    nullable: true
  })
  none?: DebitsWhereInput | undefined;
}
