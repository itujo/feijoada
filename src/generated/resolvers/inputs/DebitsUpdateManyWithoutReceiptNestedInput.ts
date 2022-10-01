import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DebitsCreateManyReceiptInputEnvelope } from "../inputs/DebitsCreateManyReceiptInputEnvelope";
import { DebitsCreateOrConnectWithoutReceiptInput } from "../inputs/DebitsCreateOrConnectWithoutReceiptInput";
import { DebitsCreateWithoutReceiptInput } from "../inputs/DebitsCreateWithoutReceiptInput";
import { DebitsScalarWhereInput } from "../inputs/DebitsScalarWhereInput";
import { DebitsUpdateManyWithWhereWithoutReceiptInput } from "../inputs/DebitsUpdateManyWithWhereWithoutReceiptInput";
import { DebitsUpdateWithWhereUniqueWithoutReceiptInput } from "../inputs/DebitsUpdateWithWhereUniqueWithoutReceiptInput";
import { DebitsUpsertWithWhereUniqueWithoutReceiptInput } from "../inputs/DebitsUpsertWithWhereUniqueWithoutReceiptInput";
import { DebitsWhereUniqueInput } from "../inputs/DebitsWhereUniqueInput";

@TypeGraphQL.InputType("DebitsUpdateManyWithoutReceiptNestedInput", {
  isAbstract: true
})
export class DebitsUpdateManyWithoutReceiptNestedInput {
  @TypeGraphQL.Field(_type => [DebitsCreateWithoutReceiptInput], {
    nullable: true
  })
  create?: DebitsCreateWithoutReceiptInput[] | undefined;

  @TypeGraphQL.Field(_type => [DebitsCreateOrConnectWithoutReceiptInput], {
    nullable: true
  })
  connectOrCreate?: DebitsCreateOrConnectWithoutReceiptInput[] | undefined;

  @TypeGraphQL.Field(_type => [DebitsUpsertWithWhereUniqueWithoutReceiptInput], {
    nullable: true
  })
  upsert?: DebitsUpsertWithWhereUniqueWithoutReceiptInput[] | undefined;

  @TypeGraphQL.Field(_type => DebitsCreateManyReceiptInputEnvelope, {
    nullable: true
  })
  createMany?: DebitsCreateManyReceiptInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [DebitsWhereUniqueInput], {
    nullable: true
  })
  set?: DebitsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [DebitsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: DebitsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [DebitsWhereUniqueInput], {
    nullable: true
  })
  delete?: DebitsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [DebitsWhereUniqueInput], {
    nullable: true
  })
  connect?: DebitsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [DebitsUpdateWithWhereUniqueWithoutReceiptInput], {
    nullable: true
  })
  update?: DebitsUpdateWithWhereUniqueWithoutReceiptInput[] | undefined;

  @TypeGraphQL.Field(_type => [DebitsUpdateManyWithWhereWithoutReceiptInput], {
    nullable: true
  })
  updateMany?: DebitsUpdateManyWithWhereWithoutReceiptInput[] | undefined;

  @TypeGraphQL.Field(_type => [DebitsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: DebitsScalarWhereInput[] | undefined;
}
