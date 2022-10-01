import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostingUnitWhereInput } from "../inputs/PostingUnitWhereInput";

@TypeGraphQL.InputType("PostingUnitRelationFilter", {
  isAbstract: true
})
export class PostingUnitRelationFilter {
  @TypeGraphQL.Field(_type => PostingUnitWhereInput, {
    nullable: true
  })
  is?: PostingUnitWhereInput | undefined;

  @TypeGraphQL.Field(_type => PostingUnitWhereInput, {
    nullable: true
  })
  isNot?: PostingUnitWhereInput | undefined;
}
