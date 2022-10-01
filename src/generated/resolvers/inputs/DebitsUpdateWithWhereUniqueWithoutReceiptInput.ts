import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DebitsUpdateWithoutReceiptInput } from "../inputs/DebitsUpdateWithoutReceiptInput";
import { DebitsWhereUniqueInput } from "../inputs/DebitsWhereUniqueInput";

@TypeGraphQL.InputType("DebitsUpdateWithWhereUniqueWithoutReceiptInput", {
  isAbstract: true
})
export class DebitsUpdateWithWhereUniqueWithoutReceiptInput {
  @TypeGraphQL.Field(_type => DebitsWhereUniqueInput, {
    nullable: false
  })
  where!: DebitsWhereUniqueInput;

  @TypeGraphQL.Field(_type => DebitsUpdateWithoutReceiptInput, {
    nullable: false
  })
  data!: DebitsUpdateWithoutReceiptInput;
}
