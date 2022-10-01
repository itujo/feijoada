import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovementCreateManyCenterOfCostInputEnvelope } from "../inputs/MovementCreateManyCenterOfCostInputEnvelope";
import { MovementCreateOrConnectWithoutCenterOfCostInput } from "../inputs/MovementCreateOrConnectWithoutCenterOfCostInput";
import { MovementCreateWithoutCenterOfCostInput } from "../inputs/MovementCreateWithoutCenterOfCostInput";
import { MovementScalarWhereInput } from "../inputs/MovementScalarWhereInput";
import { MovementUpdateManyWithWhereWithoutCenterOfCostInput } from "../inputs/MovementUpdateManyWithWhereWithoutCenterOfCostInput";
import { MovementUpdateWithWhereUniqueWithoutCenterOfCostInput } from "../inputs/MovementUpdateWithWhereUniqueWithoutCenterOfCostInput";
import { MovementUpsertWithWhereUniqueWithoutCenterOfCostInput } from "../inputs/MovementUpsertWithWhereUniqueWithoutCenterOfCostInput";
import { MovementWhereUniqueInput } from "../inputs/MovementWhereUniqueInput";

@TypeGraphQL.InputType("MovementUpdateManyWithoutCenterOfCostNestedInput", {
  isAbstract: true
})
export class MovementUpdateManyWithoutCenterOfCostNestedInput {
  @TypeGraphQL.Field(_type => [MovementCreateWithoutCenterOfCostInput], {
    nullable: true
  })
  create?: MovementCreateWithoutCenterOfCostInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovementCreateOrConnectWithoutCenterOfCostInput], {
    nullable: true
  })
  connectOrCreate?: MovementCreateOrConnectWithoutCenterOfCostInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovementUpsertWithWhereUniqueWithoutCenterOfCostInput], {
    nullable: true
  })
  upsert?: MovementUpsertWithWhereUniqueWithoutCenterOfCostInput[] | undefined;

  @TypeGraphQL.Field(_type => MovementCreateManyCenterOfCostInputEnvelope, {
    nullable: true
  })
  createMany?: MovementCreateManyCenterOfCostInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [MovementUpdateWithWhereUniqueWithoutCenterOfCostInput], {
    nullable: true
  })
  update?: MovementUpdateWithWhereUniqueWithoutCenterOfCostInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovementUpdateManyWithWhereWithoutCenterOfCostInput], {
    nullable: true
  })
  updateMany?: MovementUpdateManyWithWhereWithoutCenterOfCostInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovementScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MovementScalarWhereInput[] | undefined;
}
