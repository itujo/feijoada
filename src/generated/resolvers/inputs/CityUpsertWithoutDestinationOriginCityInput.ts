import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CityCreateWithoutDestinationOriginCityInput } from "../inputs/CityCreateWithoutDestinationOriginCityInput";
import { CityUpdateWithoutDestinationOriginCityInput } from "../inputs/CityUpdateWithoutDestinationOriginCityInput";

@TypeGraphQL.InputType("CityUpsertWithoutDestinationOriginCityInput", {
  isAbstract: true
})
export class CityUpsertWithoutDestinationOriginCityInput {
  @TypeGraphQL.Field(_type => CityUpdateWithoutDestinationOriginCityInput, {
    nullable: false
  })
  update!: CityUpdateWithoutDestinationOriginCityInput;

  @TypeGraphQL.Field(_type => CityCreateWithoutDestinationOriginCityInput, {
    nullable: false
  })
  create!: CityCreateWithoutDestinationOriginCityInput;
}
