import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovementCreateManyFileInputEnvelope } from "../inputs/MovementCreateManyFileInputEnvelope";
import { MovementCreateOrConnectWithoutFileInput } from "../inputs/MovementCreateOrConnectWithoutFileInput";
import { MovementCreateWithoutFileInput } from "../inputs/MovementCreateWithoutFileInput";
import { MovementScalarWhereInput } from "../inputs/MovementScalarWhereInput";
import { MovementUpdateManyWithWhereWithoutFileInput } from "../inputs/MovementUpdateManyWithWhereWithoutFileInput";
import { MovementUpdateWithWhereUniqueWithoutFileInput } from "../inputs/MovementUpdateWithWhereUniqueWithoutFileInput";
import { MovementUpsertWithWhereUniqueWithoutFileInput } from "../inputs/MovementUpsertWithWhereUniqueWithoutFileInput";
import { MovementWhereUniqueInput } from "../inputs/MovementWhereUniqueInput";

@TypeGraphQL.InputType("MovementUpdateManyWithoutFileNestedInput", {
  isAbstract: true
})
export class MovementUpdateManyWithoutFileNestedInput {
  @TypeGraphQL.Field(_type => [MovementCreateWithoutFileInput], {
    nullable: true
  })
  create?: MovementCreateWithoutFileInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovementCreateOrConnectWithoutFileInput], {
    nullable: true
  })
  connectOrCreate?: MovementCreateOrConnectWithoutFileInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovementUpsertWithWhereUniqueWithoutFileInput], {
    nullable: true
  })
  upsert?: MovementUpsertWithWhereUniqueWithoutFileInput[] | undefined;

  @TypeGraphQL.Field(_type => MovementCreateManyFileInputEnvelope, {
    nullable: true
  })
  createMany?: MovementCreateManyFileInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [MovementUpdateWithWhereUniqueWithoutFileInput], {
    nullable: true
  })
  update?: MovementUpdateWithWhereUniqueWithoutFileInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovementUpdateManyWithWhereWithoutFileInput], {
    nullable: true
  })
  updateMany?: MovementUpdateManyWithWhereWithoutFileInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovementScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MovementScalarWhereInput[] | undefined;
}
