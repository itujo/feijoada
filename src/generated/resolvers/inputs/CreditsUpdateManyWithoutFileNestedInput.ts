import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CreditsCreateManyFileInputEnvelope } from "../inputs/CreditsCreateManyFileInputEnvelope";
import { CreditsCreateOrConnectWithoutFileInput } from "../inputs/CreditsCreateOrConnectWithoutFileInput";
import { CreditsCreateWithoutFileInput } from "../inputs/CreditsCreateWithoutFileInput";
import { CreditsScalarWhereInput } from "../inputs/CreditsScalarWhereInput";
import { CreditsUpdateManyWithWhereWithoutFileInput } from "../inputs/CreditsUpdateManyWithWhereWithoutFileInput";
import { CreditsUpdateWithWhereUniqueWithoutFileInput } from "../inputs/CreditsUpdateWithWhereUniqueWithoutFileInput";
import { CreditsUpsertWithWhereUniqueWithoutFileInput } from "../inputs/CreditsUpsertWithWhereUniqueWithoutFileInput";
import { CreditsWhereUniqueInput } from "../inputs/CreditsWhereUniqueInput";

@TypeGraphQL.InputType("CreditsUpdateManyWithoutFileNestedInput", {
  isAbstract: true
})
export class CreditsUpdateManyWithoutFileNestedInput {
  @TypeGraphQL.Field(_type => [CreditsCreateWithoutFileInput], {
    nullable: true
  })
  create?: CreditsCreateWithoutFileInput[] | undefined;

  @TypeGraphQL.Field(_type => [CreditsCreateOrConnectWithoutFileInput], {
    nullable: true
  })
  connectOrCreate?: CreditsCreateOrConnectWithoutFileInput[] | undefined;

  @TypeGraphQL.Field(_type => [CreditsUpsertWithWhereUniqueWithoutFileInput], {
    nullable: true
  })
  upsert?: CreditsUpsertWithWhereUniqueWithoutFileInput[] | undefined;

  @TypeGraphQL.Field(_type => CreditsCreateManyFileInputEnvelope, {
    nullable: true
  })
  createMany?: CreditsCreateManyFileInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CreditsWhereUniqueInput], {
    nullable: true
  })
  set?: CreditsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CreditsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CreditsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CreditsWhereUniqueInput], {
    nullable: true
  })
  delete?: CreditsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CreditsWhereUniqueInput], {
    nullable: true
  })
  connect?: CreditsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CreditsUpdateWithWhereUniqueWithoutFileInput], {
    nullable: true
  })
  update?: CreditsUpdateWithWhereUniqueWithoutFileInput[] | undefined;

  @TypeGraphQL.Field(_type => [CreditsUpdateManyWithWhereWithoutFileInput], {
    nullable: true
  })
  updateMany?: CreditsUpdateManyWithWhereWithoutFileInput[] | undefined;

  @TypeGraphQL.Field(_type => [CreditsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CreditsScalarWhereInput[] | undefined;
}
