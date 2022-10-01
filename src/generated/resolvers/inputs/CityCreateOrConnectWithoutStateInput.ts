import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CityCreateWithoutStateInput } from "../inputs/CityCreateWithoutStateInput";
import { CityWhereUniqueInput } from "../inputs/CityWhereUniqueInput";

@TypeGraphQL.InputType("CityCreateOrConnectWithoutStateInput", {
  isAbstract: true
})
export class CityCreateOrConnectWithoutStateInput {
  @TypeGraphQL.Field(_type => CityWhereUniqueInput, {
    nullable: false
  })
  where!: CityWhereUniqueInput;

  @TypeGraphQL.Field(_type => CityCreateWithoutStateInput, {
    nullable: false
  })
  create!: CityCreateWithoutStateInput;
}
