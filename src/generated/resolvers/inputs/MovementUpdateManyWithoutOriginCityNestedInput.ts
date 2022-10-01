import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovementCreateManyOriginCityInputEnvelope } from "../inputs/MovementCreateManyOriginCityInputEnvelope";
import { MovementCreateOrConnectWithoutOriginCityInput } from "../inputs/MovementCreateOrConnectWithoutOriginCityInput";
import { MovementCreateWithoutOriginCityInput } from "../inputs/MovementCreateWithoutOriginCityInput";
import { MovementScalarWhereInput } from "../inputs/MovementScalarWhereInput";
import { MovementUpdateManyWithWhereWithoutOriginCityInput } from "../inputs/MovementUpdateManyWithWhereWithoutOriginCityInput";
import { MovementUpdateWithWhereUniqueWithoutOriginCityInput } from "../inputs/MovementUpdateWithWhereUniqueWithoutOriginCityInput";
import { MovementUpsertWithWhereUniqueWithoutOriginCityInput } from "../inputs/MovementUpsertWithWhereUniqueWithoutOriginCityInput";
import { MovementWhereUniqueInput } from "../inputs/MovementWhereUniqueInput";

@TypeGraphQL.InputType("MovementUpdateManyWithoutOriginCityNestedInput", {
  isAbstract: true
})
export class MovementUpdateManyWithoutOriginCityNestedInput {
  @TypeGraphQL.Field(_type => [MovementCreateWithoutOriginCityInput], {
    nullable: true
  })
  create?: MovementCreateWithoutOriginCityInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovementCreateOrConnectWithoutOriginCityInput], {
    nullable: true
  })
  connectOrCreate?: MovementCreateOrConnectWithoutOriginCityInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovementUpsertWithWhereUniqueWithoutOriginCityInput], {
    nullable: true
  })
  upsert?: MovementUpsertWithWhereUniqueWithoutOriginCityInput[] | undefined;

  @TypeGraphQL.Field(_type => MovementCreateManyOriginCityInputEnvelope, {
    nullable: true
  })
  createMany?: MovementCreateManyOriginCityInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MovementWhereUniqueInput], {
    nullable: true
  })
  set?: MovementWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovementWhereUniqueInput], {
    nullable: true
  })
  disconnect?: MovementWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovementWhereUniqueInput], {
    nullable: true
  })
  delete?: MovementWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovementWhereUniqueInput], {
    nullable: true
  })
  connect?: MovementWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovementUpdateWithWhereUniqueWithoutOriginCityInput], {
    nullable: true
  })
  update?: MovementUpdateWithWhereUniqueWithoutOriginCityInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovementUpdateManyWithWhereWithoutOriginCityInput], {
    nullable: true
  })
  updateMany?: MovementUpdateManyWithWhereWithoutOriginCityInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovementScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MovementScalarWhereInput[] | undefined;
}
