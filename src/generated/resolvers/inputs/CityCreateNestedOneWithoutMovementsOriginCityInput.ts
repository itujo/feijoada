import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CityCreateOrConnectWithoutMovementsOriginCityInput } from "../inputs/CityCreateOrConnectWithoutMovementsOriginCityInput";
import { CityCreateWithoutMovementsOriginCityInput } from "../inputs/CityCreateWithoutMovementsOriginCityInput";
import { CityWhereUniqueInput } from "../inputs/CityWhereUniqueInput";

@TypeGraphQL.InputType("CityCreateNestedOneWithoutMovementsOriginCityInput", {
  isAbstract: true
})
export class CityCreateNestedOneWithoutMovementsOriginCityInput {
  @TypeGraphQL.Field(_type => CityCreateWithoutMovementsOriginCityInput, {
    nullable: true
  })
  create?: CityCreateWithoutMovementsOriginCityInput | undefined;

  @TypeGraphQL.Field(_type => CityCreateOrConnectWithoutMovementsOriginCityInput, {
    nullable: true
  })
  connectOrCreate?: CityCreateOrConnectWithoutMovementsOriginCityInput | undefined;

  @TypeGraphQL.Field(_type => CityWhereUniqueInput, {
    nullable: true
  })
  connect?: CityWhereUniqueInput | undefined;
}
