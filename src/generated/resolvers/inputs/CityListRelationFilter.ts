import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CityWhereInput } from "../inputs/CityWhereInput";

@TypeGraphQL.InputType("CityListRelationFilter", {
  isAbstract: true
})
export class CityListRelationFilter {
  @TypeGraphQL.Field(_type => CityWhereInput, {
    nullable: true
  })
  every?: CityWhereInput | undefined;

  @TypeGraphQL.Field(_type => CityWhereInput, {
    nullable: true
  })
  some?: CityWhereInput | undefined;

  @TypeGraphQL.Field(_type => CityWhereInput, {
    nullable: true
  })
  none?: CityWhereInput | undefined;
}
