import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CreditsScalarWhereInput } from "../inputs/CreditsScalarWhereInput";
import { CreditsUpdateManyMutationInput } from "../inputs/CreditsUpdateManyMutationInput";

@TypeGraphQL.InputType("CreditsUpdateManyWithWhereWithoutFileInput", {
  isAbstract: true
})
export class CreditsUpdateManyWithWhereWithoutFileInput {
  @TypeGraphQL.Field(_type => CreditsScalarWhereInput, {
    nullable: false
  })
  where!: CreditsScalarWhereInput;

  @TypeGraphQL.Field(_type => CreditsUpdateManyMutationInput, {
    nullable: false
  })
  data!: CreditsUpdateManyMutationInput;
}
