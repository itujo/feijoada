import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CityCreateOrConnectWithoutMovementsOriginCityInput } from "../inputs/CityCreateOrConnectWithoutMovementsOriginCityInput";
import { CityCreateWithoutMovementsOriginCityInput } from "../inputs/CityCreateWithoutMovementsOriginCityInput";
import { CityUpdateWithoutMovementsOriginCityInput } from "../inputs/CityUpdateWithoutMovementsOriginCityInput";
import { CityUpsertWithoutMovementsOriginCityInput } from "../inputs/CityUpsertWithoutMovementsOriginCityInput";
import { CityWhereUniqueInput } from "../inputs/CityWhereUniqueInput";

@TypeGraphQL.InputType("CityUpdateOneWithoutMovementsOriginCityNestedInput", {
  isAbstract: true
})
export class CityUpdateOneWithoutMovementsOriginCityNestedInput {
  @TypeGraphQL.Field(_type => CityCreateWithoutMovementsOriginCityInput, {
    nullable: true
  })
  create?: CityCreateWithoutMovementsOriginCityInput | undefined;

  @TypeGraphQL.Field(_type => CityCreateOrConnectWithoutMovementsOriginCityInput, {
    nullable: true
  })
  connectOrCreate?: CityCreateOrConnectWithoutMovementsOriginCityInput | undefined;

  @TypeGraphQL.Field(_type => CityUpsertWithoutMovementsOriginCityInput, {
    nullable: true
  })
  upsert?: CityUpsertWithoutMovementsOriginCityInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => CityWhereUniqueInput, {
    nullable: true
  })
  connect?: CityWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CityUpdateWithoutMovementsOriginCityInput, {
    nullable: true
  })
  update?: CityUpdateWithoutMovementsOriginCityInput | undefined;
}
