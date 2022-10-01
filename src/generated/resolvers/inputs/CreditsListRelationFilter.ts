import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CreditsWhereInput } from "../inputs/CreditsWhereInput";

@TypeGraphQL.InputType("CreditsListRelationFilter", {
  isAbstract: true
})
export class CreditsListRelationFilter {
  @TypeGraphQL.Field(_type => CreditsWhereInput, {
    nullable: true
  })
  every?: CreditsWhereInput | undefined;

  @TypeGraphQL.Field(_type => CreditsWhereInput, {
    nullable: true
  })
  some?: CreditsWhereInput | undefined;

  @TypeGraphQL.Field(_type => CreditsWhereInput, {
    nullable: true
  })
  none?: CreditsWhereInput | undefined;
}
