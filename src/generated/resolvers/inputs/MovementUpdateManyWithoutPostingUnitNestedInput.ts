import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovementCreateManyPostingUnitInputEnvelope } from "../inputs/MovementCreateManyPostingUnitInputEnvelope";
import { MovementCreateOrConnectWithoutPostingUnitInput } from "../inputs/MovementCreateOrConnectWithoutPostingUnitInput";
import { MovementCreateWithoutPostingUnitInput } from "../inputs/MovementCreateWithoutPostingUnitInput";
import { MovementScalarWhereInput } from "../inputs/MovementScalarWhereInput";
import { MovementUpdateManyWithWhereWithoutPostingUnitInput } from "../inputs/MovementUpdateManyWithWhereWithoutPostingUnitInput";
import { MovementUpdateWithWhereUniqueWithoutPostingUnitInput } from "../inputs/MovementUpdateWithWhereUniqueWithoutPostingUnitInput";
import { MovementUpsertWithWhereUniqueWithoutPostingUnitInput } from "../inputs/MovementUpsertWithWhereUniqueWithoutPostingUnitInput";
import { MovementWhereUniqueInput } from "../inputs/MovementWhereUniqueInput";

@TypeGraphQL.InputType("MovementUpdateManyWithoutPostingUnitNestedInput", {
  isAbstract: true
})
export class MovementUpdateManyWithoutPostingUnitNestedInput {
  @TypeGraphQL.Field(_type => [MovementCreateWithoutPostingUnitInput], {
    nullable: true
  })
  create?: MovementCreateWithoutPostingUnitInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovementCreateOrConnectWithoutPostingUnitInput], {
    nullable: true
  })
  connectOrCreate?: MovementCreateOrConnectWithoutPostingUnitInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovementUpsertWithWhereUniqueWithoutPostingUnitInput], {
    nullable: true
  })
  upsert?: MovementUpsertWithWhereUniqueWithoutPostingUnitInput[] | undefined;

  @TypeGraphQL.Field(_type => MovementCreateManyPostingUnitInputEnvelope, {
    nullable: true
  })
  createMany?: MovementCreateManyPostingUnitInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [MovementUpdateWithWhereUniqueWithoutPostingUnitInput], {
    nullable: true
  })
  update?: MovementUpdateWithWhereUniqueWithoutPostingUnitInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovementUpdateManyWithWhereWithoutPostingUnitInput], {
    nullable: true
  })
  updateMany?: MovementUpdateManyWithWhereWithoutPostingUnitInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovementScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MovementScalarWhereInput[] | undefined;
}
