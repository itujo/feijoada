import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CityUpdateWithoutStateInput } from "../inputs/CityUpdateWithoutStateInput";
import { CityWhereUniqueInput } from "../inputs/CityWhereUniqueInput";

@TypeGraphQL.InputType("CityUpdateWithWhereUniqueWithoutStateInput", {
  isAbstract: true
})
export class CityUpdateWithWhereUniqueWithoutStateInput {
  @TypeGraphQL.Field(_type => CityWhereUniqueInput, {
    nullable: false
  })
  where!: CityWhereUniqueInput;

  @TypeGraphQL.Field(_type => CityUpdateWithoutStateInput, {
    nullable: false
  })
  data!: CityUpdateWithoutStateInput;
}
