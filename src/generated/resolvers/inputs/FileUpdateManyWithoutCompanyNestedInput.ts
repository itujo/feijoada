import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FileCreateManyCompanyInputEnvelope } from "../inputs/FileCreateManyCompanyInputEnvelope";
import { FileCreateOrConnectWithoutCompanyInput } from "../inputs/FileCreateOrConnectWithoutCompanyInput";
import { FileCreateWithoutCompanyInput } from "../inputs/FileCreateWithoutCompanyInput";
import { FileScalarWhereInput } from "../inputs/FileScalarWhereInput";
import { FileUpdateManyWithWhereWithoutCompanyInput } from "../inputs/FileUpdateManyWithWhereWithoutCompanyInput";
import { FileUpdateWithWhereUniqueWithoutCompanyInput } from "../inputs/FileUpdateWithWhereUniqueWithoutCompanyInput";
import { FileUpsertWithWhereUniqueWithoutCompanyInput } from "../inputs/FileUpsertWithWhereUniqueWithoutCompanyInput";
import { FileWhereUniqueInput } from "../inputs/FileWhereUniqueInput";

@TypeGraphQL.InputType("FileUpdateManyWithoutCompanyNestedInput", {
  isAbstract: true
})
export class FileUpdateManyWithoutCompanyNestedInput {
  @TypeGraphQL.Field(_type => [FileCreateWithoutCompanyInput], {
    nullable: true
  })
  create?: FileCreateWithoutCompanyInput[] | undefined;

  @TypeGraphQL.Field(_type => [FileCreateOrConnectWithoutCompanyInput], {
    nullable: true
  })
  connectOrCreate?: FileCreateOrConnectWithoutCompanyInput[] | undefined;

  @TypeGraphQL.Field(_type => [FileUpsertWithWhereUniqueWithoutCompanyInput], {
    nullable: true
  })
  upsert?: FileUpsertWithWhereUniqueWithoutCompanyInput[] | undefined;

  @TypeGraphQL.Field(_type => FileCreateManyCompanyInputEnvelope, {
    nullable: true
  })
  createMany?: FileCreateManyCompanyInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FileWhereUniqueInput], {
    nullable: true
  })
  set?: FileWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FileWhereUniqueInput], {
    nullable: true
  })
  disconnect?: FileWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FileWhereUniqueInput], {
    nullable: true
  })
  delete?: FileWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FileWhereUniqueInput], {
    nullable: true
  })
  connect?: FileWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FileUpdateWithWhereUniqueWithoutCompanyInput], {
    nullable: true
  })
  update?: FileUpdateWithWhereUniqueWithoutCompanyInput[] | undefined;

  @TypeGraphQL.Field(_type => [FileUpdateManyWithWhereWithoutCompanyInput], {
    nullable: true
  })
  updateMany?: FileUpdateManyWithWhereWithoutCompanyInput[] | undefined;

  @TypeGraphQL.Field(_type => [FileScalarWhereInput], {
    nullable: true
  })
  deleteMany?: FileScalarWhereInput[] | undefined;
}
