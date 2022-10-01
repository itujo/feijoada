import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CityCreateWithoutDestinationOriginCityInput } from "../inputs/CityCreateWithoutDestinationOriginCityInput";
import { CityWhereUniqueInput } from "../inputs/CityWhereUniqueInput";

@TypeGraphQL.InputType("CityCreateOrConnectWithoutDestinationOriginCityInput", {
  isAbstract: true
})
export class CityCreateOrConnectWithoutDestinationOriginCityInput {
  @TypeGraphQL.Field(_type => CityWhereUniqueInput, {
    nullable: false
  })
  where!: CityWhereUniqueInput;

  @TypeGraphQL.Field(_type => CityCreateWithoutDestinationOriginCityInput, {
    nullable: false
  })
  create!: CityCreateWithoutDestinationOriginCityInput;
}
