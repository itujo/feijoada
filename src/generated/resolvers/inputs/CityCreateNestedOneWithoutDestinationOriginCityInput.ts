import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CityCreateOrConnectWithoutDestinationOriginCityInput } from "../inputs/CityCreateOrConnectWithoutDestinationOriginCityInput";
import { CityCreateWithoutDestinationOriginCityInput } from "../inputs/CityCreateWithoutDestinationOriginCityInput";
import { CityWhereUniqueInput } from "../inputs/CityWhereUniqueInput";

@TypeGraphQL.InputType("CityCreateNestedOneWithoutDestinationOriginCityInput", {
  isAbstract: true
})
export class CityCreateNestedOneWithoutDestinationOriginCityInput {
  @TypeGraphQL.Field(_type => CityCreateWithoutDestinationOriginCityInput, {
    nullable: true
  })
  create?: CityCreateWithoutDestinationOriginCityInput | undefined;

  @TypeGraphQL.Field(_type => CityCreateOrConnectWithoutDestinationOriginCityInput, {
    nullable: true
  })
  connectOrCreate?: CityCreateOrConnectWithoutDestinationOriginCityInput | undefined;

  @TypeGraphQL.Field(_type => CityWhereUniqueInput, {
    nullable: true
  })
  connect?: CityWhereUniqueInput | undefined;
}
