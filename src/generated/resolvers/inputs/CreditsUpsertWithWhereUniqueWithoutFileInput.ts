import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CreditsCreateWithoutFileInput } from "../inputs/CreditsCreateWithoutFileInput";
import { CreditsUpdateWithoutFileInput } from "../inputs/CreditsUpdateWithoutFileInput";
import { CreditsWhereUniqueInput } from "../inputs/CreditsWhereUniqueInput";

@TypeGraphQL.InputType("CreditsUpsertWithWhereUniqueWithoutFileInput", {
  isAbstract: true
})
export class CreditsUpsertWithWhereUniqueWithoutFileInput {
  @TypeGraphQL.Field(_type => CreditsWhereUniqueInput, {
    nullable: false
  })
  where!: CreditsWhereUniqueInput;

  @TypeGraphQL.Field(_type => CreditsUpdateWithoutFileInput, {
    nullable: false
  })
  update!: CreditsUpdateWithoutFileInput;

  @TypeGraphQL.Field(_type => CreditsCreateWithoutFileInput, {
    nullable: false
  })
  create!: CreditsCreateWithoutFileInput;
}
