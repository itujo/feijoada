import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovementCreateManyPostalCardInputEnvelope } from "../inputs/MovementCreateManyPostalCardInputEnvelope";
import { MovementCreateOrConnectWithoutPostalCardInput } from "../inputs/MovementCreateOrConnectWithoutPostalCardInput";
import { MovementCreateWithoutPostalCardInput } from "../inputs/MovementCreateWithoutPostalCardInput";
import { MovementScalarWhereInput } from "../inputs/MovementScalarWhereInput";
import { MovementUpdateManyWithWhereWithoutPostalCardInput } from "../inputs/MovementUpdateManyWithWhereWithoutPostalCardInput";
import { MovementUpdateWithWhereUniqueWithoutPostalCardInput } from "../inputs/MovementUpdateWithWhereUniqueWithoutPostalCardInput";
import { MovementUpsertWithWhereUniqueWithoutPostalCardInput } from "../inputs/MovementUpsertWithWhereUniqueWithoutPostalCardInput";
import { MovementWhereUniqueInput } from "../inputs/MovementWhereUniqueInput";

@TypeGraphQL.InputType("MovementUpdateManyWithoutPostalCardNestedInput", {
  isAbstract: true
})
export class MovementUpdateManyWithoutPostalCardNestedInput {
  @TypeGraphQL.Field(_type => [MovementCreateWithoutPostalCardInput], {
    nullable: true
  })
  create?: MovementCreateWithoutPostalCardInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovementCreateOrConnectWithoutPostalCardInput], {
    nullable: true
  })
  connectOrCreate?: MovementCreateOrConnectWithoutPostalCardInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovementUpsertWithWhereUniqueWithoutPostalCardInput], {
    nullable: true
  })
  upsert?: MovementUpsertWithWhereUniqueWithoutPostalCardInput[] | undefined;

  @TypeGraphQL.Field(_type => MovementCreateManyPostalCardInputEnvelope, {
    nullable: true
  })
  createMany?: MovementCreateManyPostalCardInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [MovementUpdateWithWhereUniqueWithoutPostalCardInput], {
    nullable: true
  })
  update?: MovementUpdateWithWhereUniqueWithoutPostalCardInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovementUpdateManyWithWhereWithoutPostalCardInput], {
    nullable: true
  })
  updateMany?: MovementUpdateManyWithWhereWithoutPostalCardInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovementScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MovementScalarWhereInput[] | undefined;
}
