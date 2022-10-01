import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DebitsScalarWhereInput } from "../inputs/DebitsScalarWhereInput";
import { DebitsUpdateManyMutationInput } from "../inputs/DebitsUpdateManyMutationInput";

@TypeGraphQL.InputType("DebitsUpdateManyWithWhereWithoutReceiptInput", {
  isAbstract: true
})
export class DebitsUpdateManyWithWhereWithoutReceiptInput {
  @TypeGraphQL.Field(_type => DebitsScalarWhereInput, {
    nullable: false
  })
  where!: DebitsScalarWhereInput;

  @TypeGraphQL.Field(_type => DebitsUpdateManyMutationInput, {
    nullable: false
  })
  data!: DebitsUpdateManyMutationInput;
}
