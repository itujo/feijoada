import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FileCreateWithoutMovementsInput } from "../inputs/FileCreateWithoutMovementsInput";
import { FileWhereUniqueInput } from "../inputs/FileWhereUniqueInput";

@TypeGraphQL.InputType("FileCreateOrConnectWithoutMovementsInput", {
  isAbstract: true
})
export class FileCreateOrConnectWithoutMovementsInput {
  @TypeGraphQL.Field(_type => FileWhereUniqueInput, {
    nullable: false
  })
  where!: FileWhereUniqueInput;

  @TypeGraphQL.Field(_type => FileCreateWithoutMovementsInput, {
    nullable: false
  })
  create!: FileCreateWithoutMovementsInput;
}
