import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FileCreateWithoutCreditsInput } from "../inputs/FileCreateWithoutCreditsInput";
import { FileWhereUniqueInput } from "../inputs/FileWhereUniqueInput";

@TypeGraphQL.InputType("FileCreateOrConnectWithoutCreditsInput", {
  isAbstract: true
})
export class FileCreateOrConnectWithoutCreditsInput {
  @TypeGraphQL.Field(_type => FileWhereUniqueInput, {
    nullable: false
  })
  where!: FileWhereUniqueInput;

  @TypeGraphQL.Field(_type => FileCreateWithoutCreditsInput, {
    nullable: false
  })
  create!: FileCreateWithoutCreditsInput;
}
