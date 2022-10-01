import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FileCreateOrConnectWithoutDebitsInput } from "../inputs/FileCreateOrConnectWithoutDebitsInput";
import { FileCreateWithoutDebitsInput } from "../inputs/FileCreateWithoutDebitsInput";
import { FileWhereUniqueInput } from "../inputs/FileWhereUniqueInput";

@TypeGraphQL.InputType("FileCreateNestedOneWithoutDebitsInput", {
  isAbstract: true
})
export class FileCreateNestedOneWithoutDebitsInput {
  @TypeGraphQL.Field(_type => FileCreateWithoutDebitsInput, {
    nullable: true
  })
  create?: FileCreateWithoutDebitsInput | undefined;

  @TypeGraphQL.Field(_type => FileCreateOrConnectWithoutDebitsInput, {
    nullable: true
  })
  connectOrCreate?: FileCreateOrConnectWithoutDebitsInput | undefined;

  @TypeGraphQL.Field(_type => FileWhereUniqueInput, {
    nullable: true
  })
  connect?: FileWhereUniqueInput | undefined;
}
