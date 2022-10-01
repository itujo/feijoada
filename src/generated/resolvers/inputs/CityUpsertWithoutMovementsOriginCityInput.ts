import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CityCreateWithoutMovementsOriginCityInput } from "../inputs/CityCreateWithoutMovementsOriginCityInput";
import { CityUpdateWithoutMovementsOriginCityInput } from "../inputs/CityUpdateWithoutMovementsOriginCityInput";

@TypeGraphQL.InputType("CityUpsertWithoutMovementsOriginCityInput", {
  isAbstract: true
})
export class CityUpsertWithoutMovementsOriginCityInput {
  @TypeGraphQL.Field(_type => CityUpdateWithoutMovementsOriginCityInput, {
    nullable: false
  })
  update!: CityUpdateWithoutMovementsOriginCityInput;

  @TypeGraphQL.Field(_type => CityCreateWithoutMovementsOriginCityInput, {
    nullable: false
  })
  create!: CityCreateWithoutMovementsOriginCityInput;
}
