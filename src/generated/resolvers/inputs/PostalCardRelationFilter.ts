import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostalCardWhereInput } from "../inputs/PostalCardWhereInput";

@TypeGraphQL.InputType("PostalCardRelationFilter", {
  isAbstract: true
})
export class PostalCardRelationFilter {
  @TypeGraphQL.Field(_type => PostalCardWhereInput, {
    nullable: true
  })
  is?: PostalCardWhereInput | undefined;

  @TypeGraphQL.Field(_type => PostalCardWhereInput, {
    nullable: true
  })
  isNot?: PostalCardWhereInput | undefined;
}
