import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CityCreateManyStateInputEnvelope } from "../inputs/CityCreateManyStateInputEnvelope";
import { CityCreateOrConnectWithoutStateInput } from "../inputs/CityCreateOrConnectWithoutStateInput";
import { CityCreateWithoutStateInput } from "../inputs/CityCreateWithoutStateInput";
import { CityScalarWhereInput } from "../inputs/CityScalarWhereInput";
import { CityUpdateManyWithWhereWithoutStateInput } from "../inputs/CityUpdateManyWithWhereWithoutStateInput";
import { CityUpdateWithWhereUniqueWithoutStateInput } from "../inputs/CityUpdateWithWhereUniqueWithoutStateInput";
import { CityUpsertWithWhereUniqueWithoutStateInput } from "../inputs/CityUpsertWithWhereUniqueWithoutStateInput";
import { CityWhereUniqueInput } from "../inputs/CityWhereUniqueInput";

@TypeGraphQL.InputType("CityUpdateManyWithoutStateNestedInput", {
  isAbstract: true
})
export class CityUpdateManyWithoutStateNestedInput {
  @TypeGraphQL.Field(_type => [CityCreateWithoutStateInput], {
    nullable: true
  })
  create?: CityCreateWithoutStateInput[] | undefined;

  @TypeGraphQL.Field(_type => [CityCreateOrConnectWithoutStateInput], {
    nullable: true
  })
  connectOrCreate?: CityCreateOrConnectWithoutStateInput[] | undefined;

  @TypeGraphQL.Field(_type => [CityUpsertWithWhereUniqueWithoutStateInput], {
    nullable: true
  })
  upsert?: CityUpsertWithWhereUniqueWithoutStateInput[] | undefined;

  @TypeGraphQL.Field(_type => CityCreateManyStateInputEnvelope, {
    nullable: true
  })
  createMany?: CityCreateManyStateInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CityWhereUniqueInput], {
    nullable: true
  })
  set?: CityWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CityWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CityWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CityWhereUniqueInput], {
    nullable: true
  })
  delete?: CityWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CityWhereUniqueInput], {
    nullable: true
  })
  connect?: CityWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CityUpdateWithWhereUniqueWithoutStateInput], {
    nullable: true
  })
  update?: CityUpdateWithWhereUniqueWithoutStateInput[] | undefined;

  @TypeGraphQL.Field(_type => [CityUpdateManyWithWhereWithoutStateInput], {
    nullable: true
  })
  updateMany?: CityUpdateManyWithWhereWithoutStateInput[] | undefined;

  @TypeGraphQL.Field(_type => [CityScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CityScalarWhereInput[] | undefined;
}
