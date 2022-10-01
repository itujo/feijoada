import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovementCreateManyDestinationCityInputEnvelope } from "../inputs/MovementCreateManyDestinationCityInputEnvelope";
import { MovementCreateOrConnectWithoutDestinationCityInput } from "../inputs/MovementCreateOrConnectWithoutDestinationCityInput";
import { MovementCreateWithoutDestinationCityInput } from "../inputs/MovementCreateWithoutDestinationCityInput";
import { MovementScalarWhereInput } from "../inputs/MovementScalarWhereInput";
import { MovementUpdateManyWithWhereWithoutDestinationCityInput } from "../inputs/MovementUpdateManyWithWhereWithoutDestinationCityInput";
import { MovementUpdateWithWhereUniqueWithoutDestinationCityInput } from "../inputs/MovementUpdateWithWhereUniqueWithoutDestinationCityInput";
import { MovementUpsertWithWhereUniqueWithoutDestinationCityInput } from "../inputs/MovementUpsertWithWhereUniqueWithoutDestinationCityInput";
import { MovementWhereUniqueInput } from "../inputs/MovementWhereUniqueInput";

@TypeGraphQL.InputType("MovementUpdateManyWithoutDestinationCityNestedInput", {
  isAbstract: true
})
export class MovementUpdateManyWithoutDestinationCityNestedInput {
  @TypeGraphQL.Field(_type => [MovementCreateWithoutDestinationCityInput], {
    nullable: true
  })
  create?: MovementCreateWithoutDestinationCityInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovementCreateOrConnectWithoutDestinationCityInput], {
    nullable: true
  })
  connectOrCreate?: MovementCreateOrConnectWithoutDestinationCityInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovementUpsertWithWhereUniqueWithoutDestinationCityInput], {
    nullable: true
  })
  upsert?: MovementUpsertWithWhereUniqueWithoutDestinationCityInput[] | undefined;

  @TypeGraphQL.Field(_type => MovementCreateManyDestinationCityInputEnvelope, {
    nullable: true
  })
  createMany?: MovementCreateManyDestinationCityInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [MovementUpdateWithWhereUniqueWithoutDestinationCityInput], {
    nullable: true
  })
  update?: MovementUpdateWithWhereUniqueWithoutDestinationCityInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovementUpdateManyWithWhereWithoutDestinationCityInput], {
    nullable: true
  })
  updateMany?: MovementUpdateManyWithWhereWithoutDestinationCityInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovementScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MovementScalarWhereInput[] | undefined;
}
