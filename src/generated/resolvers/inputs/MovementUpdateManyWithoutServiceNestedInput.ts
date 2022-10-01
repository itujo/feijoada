import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovementCreateManyServiceInputEnvelope } from "../inputs/MovementCreateManyServiceInputEnvelope";
import { MovementCreateOrConnectWithoutServiceInput } from "../inputs/MovementCreateOrConnectWithoutServiceInput";
import { MovementCreateWithoutServiceInput } from "../inputs/MovementCreateWithoutServiceInput";
import { MovementScalarWhereInput } from "../inputs/MovementScalarWhereInput";
import { MovementUpdateManyWithWhereWithoutServiceInput } from "../inputs/MovementUpdateManyWithWhereWithoutServiceInput";
import { MovementUpdateWithWhereUniqueWithoutServiceInput } from "../inputs/MovementUpdateWithWhereUniqueWithoutServiceInput";
import { MovementUpsertWithWhereUniqueWithoutServiceInput } from "../inputs/MovementUpsertWithWhereUniqueWithoutServiceInput";
import { MovementWhereUniqueInput } from "../inputs/MovementWhereUniqueInput";

@TypeGraphQL.InputType("MovementUpdateManyWithoutServiceNestedInput", {
  isAbstract: true
})
export class MovementUpdateManyWithoutServiceNestedInput {
  @TypeGraphQL.Field(_type => [MovementCreateWithoutServiceInput], {
    nullable: true
  })
  create?: MovementCreateWithoutServiceInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovementCreateOrConnectWithoutServiceInput], {
    nullable: true
  })
  connectOrCreate?: MovementCreateOrConnectWithoutServiceInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovementUpsertWithWhereUniqueWithoutServiceInput], {
    nullable: true
  })
  upsert?: MovementUpsertWithWhereUniqueWithoutServiceInput[] | undefined;

  @TypeGraphQL.Field(_type => MovementCreateManyServiceInputEnvelope, {
    nullable: true
  })
  createMany?: MovementCreateManyServiceInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [MovementUpdateWithWhereUniqueWithoutServiceInput], {
    nullable: true
  })
  update?: MovementUpdateWithWhereUniqueWithoutServiceInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovementUpdateManyWithWhereWithoutServiceInput], {
    nullable: true
  })
  updateMany?: MovementUpdateManyWithWhereWithoutServiceInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovementScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MovementScalarWhereInput[] | undefined;
}
