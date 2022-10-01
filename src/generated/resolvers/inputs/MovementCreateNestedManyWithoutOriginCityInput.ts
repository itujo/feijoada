import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovementCreateManyOriginCityInputEnvelope } from "../inputs/MovementCreateManyOriginCityInputEnvelope";
import { MovementCreateOrConnectWithoutOriginCityInput } from "../inputs/MovementCreateOrConnectWithoutOriginCityInput";
import { MovementCreateWithoutOriginCityInput } from "../inputs/MovementCreateWithoutOriginCityInput";
import { MovementWhereUniqueInput } from "../inputs/MovementWhereUniqueInput";

@TypeGraphQL.InputType("MovementCreateNestedManyWithoutOriginCityInput", {
  isAbstract: true
})
export class MovementCreateNestedManyWithoutOriginCityInput {
  @TypeGraphQL.Field(_type => [MovementCreateWithoutOriginCityInput], {
    nullable: true
  })
  create?: MovementCreateWithoutOriginCityInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovementCreateOrConnectWithoutOriginCityInput], {
    nullable: true
  })
  connectOrCreate?: MovementCreateOrConnectWithoutOriginCityInput[] | undefined;

  @TypeGraphQL.Field(_type => MovementCreateManyOriginCityInputEnvelope, {
    nullable: true
  })
  createMany?: MovementCreateManyOriginCityInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MovementWhereUniqueInput], {
    nullable: true
  })
  connect?: MovementWhereUniqueInput[] | undefined;
}
