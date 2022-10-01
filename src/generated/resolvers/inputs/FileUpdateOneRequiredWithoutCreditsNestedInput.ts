import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FileCreateOrConnectWithoutCreditsInput } from "../inputs/FileCreateOrConnectWithoutCreditsInput";
import { FileCreateWithoutCreditsInput } from "../inputs/FileCreateWithoutCreditsInput";
import { FileUpdateWithoutCreditsInput } from "../inputs/FileUpdateWithoutCreditsInput";
import { FileUpsertWithoutCreditsInput } from "../inputs/FileUpsertWithoutCreditsInput";
import { FileWhereUniqueInput } from "../inputs/FileWhereUniqueInput";

@TypeGraphQL.InputType("FileUpdateOneRequiredWithoutCreditsNestedInput", {
  isAbstract: true
})
export class FileUpdateOneRequiredWithoutCreditsNestedInput {
  @TypeGraphQL.Field(_type => FileCreateWithoutCreditsInput, {
    nullable: true
  })
  create?: FileCreateWithoutCreditsInput | undefined;

  @TypeGraphQL.Field(_type => FileCreateOrConnectWithoutCreditsInput, {
    nullable: true
  })
  connectOrCreate?: FileCreateOrConnectWithoutCreditsInput | undefined;

  @TypeGraphQL.Field(_type => FileUpsertWithoutCreditsInput, {
    nullable: true
  })
  upsert?: FileUpsertWithoutCreditsInput | undefined;

  @TypeGraphQL.Field(_type => FileWhereUniqueInput, {
    nullable: true
  })
  connect?: FileWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => FileUpdateWithoutCreditsInput, {
    nullable: true
  })
  update?: FileUpdateWithoutCreditsInput | undefined;
}
