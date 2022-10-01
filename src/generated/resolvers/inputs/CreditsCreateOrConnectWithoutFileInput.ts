import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CreditsCreateWithoutFileInput } from "../inputs/CreditsCreateWithoutFileInput";
import { CreditsWhereUniqueInput } from "../inputs/CreditsWhereUniqueInput";

@TypeGraphQL.InputType("CreditsCreateOrConnectWithoutFileInput", {
  isAbstract: true
})
export class CreditsCreateOrConnectWithoutFileInput {
  @TypeGraphQL.Field(_type => CreditsWhereUniqueInput, {
    nullable: false
  })
  where!: CreditsWhereUniqueInput;

  @TypeGraphQL.Field(_type => CreditsCreateWithoutFileInput, {
    nullable: false
  })
  create!: CreditsCreateWithoutFileInput;
}
