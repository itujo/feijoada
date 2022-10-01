import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FileCreateOrConnectWithoutDebitsInput } from "../inputs/FileCreateOrConnectWithoutDebitsInput";
import { FileCreateWithoutDebitsInput } from "../inputs/FileCreateWithoutDebitsInput";
import { FileUpdateWithoutDebitsInput } from "../inputs/FileUpdateWithoutDebitsInput";
import { FileUpsertWithoutDebitsInput } from "../inputs/FileUpsertWithoutDebitsInput";
import { FileWhereUniqueInput } from "../inputs/FileWhereUniqueInput";

@TypeGraphQL.InputType("FileUpdateOneRequiredWithoutDebitsNestedInput", {
  isAbstract: true
})
export class FileUpdateOneRequiredWithoutDebitsNestedInput {
  @TypeGraphQL.Field(_type => FileCreateWithoutDebitsInput, {
    nullable: true
  })
  create?: FileCreateWithoutDebitsInput | undefined;

  @TypeGraphQL.Field(_type => FileCreateOrConnectWithoutDebitsInput, {
    nullable: true
  })
  connectOrCreate?: FileCreateOrConnectWithoutDebitsInput | undefined;

  @TypeGraphQL.Field(_type => FileUpsertWithoutDebitsInput, {
    nullable: true
  })
  upsert?: FileUpsertWithoutDebitsInput | undefined;

  @TypeGraphQL.Field(_type => FileWhereUniqueInput, {
    nullable: true
  })
  connect?: FileWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => FileUpdateWithoutDebitsInput, {
    nullable: true
  })
  update?: FileUpdateWithoutDebitsInput | undefined;
}
