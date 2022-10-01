import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DebitsCreateWithoutReceiptInput } from "../inputs/DebitsCreateWithoutReceiptInput";
import { DebitsUpdateWithoutReceiptInput } from "../inputs/DebitsUpdateWithoutReceiptInput";
import { DebitsWhereUniqueInput } from "../inputs/DebitsWhereUniqueInput";

@TypeGraphQL.InputType("DebitsUpsertWithWhereUniqueWithoutReceiptInput", {
  isAbstract: true
})
export class DebitsUpsertWithWhereUniqueWithoutReceiptInput {
  @TypeGraphQL.Field(_type => DebitsWhereUniqueInput, {
    nullable: false
  })
  where!: DebitsWhereUniqueInput;

  @TypeGraphQL.Field(_type => DebitsUpdateWithoutReceiptInput, {
    nullable: false
  })
  update!: DebitsUpdateWithoutReceiptInput;

  @TypeGraphQL.Field(_type => DebitsCreateWithoutReceiptInput, {
    nullable: false
  })
  create!: DebitsCreateWithoutReceiptInput;
}
