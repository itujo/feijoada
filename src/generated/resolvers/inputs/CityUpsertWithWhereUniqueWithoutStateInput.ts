import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CityCreateWithoutStateInput } from "../inputs/CityCreateWithoutStateInput";
import { CityUpdateWithoutStateInput } from "../inputs/CityUpdateWithoutStateInput";
import { CityWhereUniqueInput } from "../inputs/CityWhereUniqueInput";

@TypeGraphQL.InputType("CityUpsertWithWhereUniqueWithoutStateInput", {
  isAbstract: true
})
export class CityUpsertWithWhereUniqueWithoutStateInput {
  @TypeGraphQL.Field(_type => CityWhereUniqueInput, {
    nullable: false
  })
  where!: CityWhereUniqueInput;

  @TypeGraphQL.Field(_type => CityUpdateWithoutStateInput, {
    nullable: false
  })
  update!: CityUpdateWithoutStateInput;

  @TypeGraphQL.Field(_type => CityCreateWithoutStateInput, {
    nullable: false
  })
  create!: CityCreateWithoutStateInput;
}
