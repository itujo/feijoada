import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CityCreateOrConnectWithoutDestinationOriginCityInput } from "../inputs/CityCreateOrConnectWithoutDestinationOriginCityInput";
import { CityCreateWithoutDestinationOriginCityInput } from "../inputs/CityCreateWithoutDestinationOriginCityInput";
import { CityUpdateWithoutDestinationOriginCityInput } from "../inputs/CityUpdateWithoutDestinationOriginCityInput";
import { CityUpsertWithoutDestinationOriginCityInput } from "../inputs/CityUpsertWithoutDestinationOriginCityInput";
import { CityWhereUniqueInput } from "../inputs/CityWhereUniqueInput";

@TypeGraphQL.InputType("CityUpdateOneWithoutDestinationOriginCityNestedInput", {
  isAbstract: true
})
export class CityUpdateOneWithoutDestinationOriginCityNestedInput {
  @TypeGraphQL.Field(_type => CityCreateWithoutDestinationOriginCityInput, {
    nullable: true
  })
  create?: CityCreateWithoutDestinationOriginCityInput | undefined;

  @TypeGraphQL.Field(_type => CityCreateOrConnectWithoutDestinationOriginCityInput, {
    nullable: true
  })
  connectOrCreate?: CityCreateOrConnectWithoutDestinationOriginCityInput | undefined;

  @TypeGraphQL.Field(_type => CityUpsertWithoutDestinationOriginCityInput, {
    nullable: true
  })
  upsert?: CityUpsertWithoutDestinationOriginCityInput | undefined;

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

  @TypeGraphQL.Field(_type => CityUpdateWithoutDestinationOriginCityInput, {
    nullable: true
  })
  update?: CityUpdateWithoutDestinationOriginCityInput | undefined;
}
