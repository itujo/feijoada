import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FileCreateOrConnectWithoutMovementsInput } from "../inputs/FileCreateOrConnectWithoutMovementsInput";
import { FileCreateWithoutMovementsInput } from "../inputs/FileCreateWithoutMovementsInput";
import { FileUpdateWithoutMovementsInput } from "../inputs/FileUpdateWithoutMovementsInput";
import { FileUpsertWithoutMovementsInput } from "../inputs/FileUpsertWithoutMovementsInput";
import { FileWhereUniqueInput } from "../inputs/FileWhereUniqueInput";

@TypeGraphQL.InputType("FileUpdateOneRequiredWithoutMovementsNestedInput", {
  isAbstract: true
})
export class FileUpdateOneRequiredWithoutMovementsNestedInput {
  @TypeGraphQL.Field(_type => FileCreateWithoutMovementsInput, {
    nullable: true
  })
  create?: FileCreateWithoutMovementsInput | undefined;

  @TypeGraphQL.Field(_type => FileCreateOrConnectWithoutMovementsInput, {
    nullable: true
  })
  connectOrCreate?: FileCreateOrConnectWithoutMovementsInput | undefined;

  @TypeGraphQL.Field(_type => FileUpsertWithoutMovementsInput, {
    nullable: true
  })
  upsert?: FileUpsertWithoutMovementsInput | undefined;

  @TypeGraphQL.Field(_type => FileWhereUniqueInput, {
    nullable: true
  })
  connect?: FileWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => FileUpdateWithoutMovementsInput, {
    nullable: true
  })
  update?: FileUpdateWithoutMovementsInput | undefined;
}
