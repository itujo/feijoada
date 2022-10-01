import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CityCreateWithoutMovementsOriginCityInput } from "../inputs/CityCreateWithoutMovementsOriginCityInput";
import { CityWhereUniqueInput } from "../inputs/CityWhereUniqueInput";

@TypeGraphQL.InputType("CityCreateOrConnectWithoutMovementsOriginCityInput", {
  isAbstract: true
})
export class CityCreateOrConnectWithoutMovementsOriginCityInput {
  @TypeGraphQL.Field(_type => CityWhereUniqueInput, {
    nullable: false
  })
  where!: CityWhereUniqueInput;

  @TypeGraphQL.Field(_type => CityCreateWithoutMovementsOriginCityInput, {
    nullable: false
  })
  create!: CityCreateWithoutMovementsOriginCityInput;
}
