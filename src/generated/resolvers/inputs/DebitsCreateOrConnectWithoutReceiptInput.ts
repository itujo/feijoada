import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DebitsCreateWithoutReceiptInput } from "../inputs/DebitsCreateWithoutReceiptInput";
import { DebitsWhereUniqueInput } from "../inputs/DebitsWhereUniqueInput";

@TypeGraphQL.InputType("DebitsCreateOrConnectWithoutReceiptInput", {
  isAbstract: true
})
export class DebitsCreateOrConnectWithoutReceiptInput {
  @TypeGraphQL.Field(_type => DebitsWhereUniqueInput, {
    nullable: false
  })
  where!: DebitsWhereUniqueInput;

  @TypeGraphQL.Field(_type => DebitsCreateWithoutReceiptInput, {
    nullable: false
  })
  create!: DebitsCreateWithoutReceiptInput;
}
