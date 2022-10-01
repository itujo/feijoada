import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FileCreateOrConnectWithoutMovementsInput } from "../inputs/FileCreateOrConnectWithoutMovementsInput";
import { FileCreateWithoutMovementsInput } from "../inputs/FileCreateWithoutMovementsInput";
import { FileWhereUniqueInput } from "../inputs/FileWhereUniqueInput";

@TypeGraphQL.InputType("FileCreateNestedOneWithoutMovementsInput", {
  isAbstract: true
})
export class FileCreateNestedOneWithoutMovementsInput {
  @TypeGraphQL.Field(_type => FileCreateWithoutMovementsInput, {
    nullable: true
  })
  create?: FileCreateWithoutMovementsInput | undefined;

  @TypeGraphQL.Field(_type => FileCreateOrConnectWithoutMovementsInput, {
    nullable: true
  })
  connectOrCreate?: FileCreateOrConnectWithoutMovementsInput | undefined;

  @TypeGraphQL.Field(_type => FileWhereUniqueInput, {
    nullable: true
  })
  connect?: FileWhereUniqueInput | undefined;
}
