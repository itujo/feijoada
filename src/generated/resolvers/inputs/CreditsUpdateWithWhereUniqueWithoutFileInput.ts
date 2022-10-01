import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CreditsUpdateWithoutFileInput } from "../inputs/CreditsUpdateWithoutFileInput";
import { CreditsWhereUniqueInput } from "../inputs/CreditsWhereUniqueInput";

@TypeGraphQL.InputType("CreditsUpdateWithWhereUniqueWithoutFileInput", {
  isAbstract: true
})
export class CreditsUpdateWithWhereUniqueWithoutFileInput {
  @TypeGraphQL.Field(_type => CreditsWhereUniqueInput, {
    nullable: false
  })
  where!: CreditsWhereUniqueInput;

  @TypeGraphQL.Field(_type => CreditsUpdateWithoutFileInput, {
    nullable: false
  })
  data!: CreditsUpdateWithoutFileInput;
}
