import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DebitsCreateManyReceiptInputEnvelope } from "../inputs/DebitsCreateManyReceiptInputEnvelope";
import { DebitsCreateOrConnectWithoutReceiptInput } from "../inputs/DebitsCreateOrConnectWithoutReceiptInput";
import { DebitsCreateWithoutReceiptInput } from "../inputs/DebitsCreateWithoutReceiptInput";
import { DebitsWhereUniqueInput } from "../inputs/DebitsWhereUniqueInput";

@TypeGraphQL.InputType("DebitsCreateNestedManyWithoutReceiptInput", {
  isAbstract: true
})
export class DebitsCreateNestedManyWithoutReceiptInput {
  @TypeGraphQL.Field(_type => [DebitsCreateWithoutReceiptInput], {
    nullable: true
  })
  create?: DebitsCreateWithoutReceiptInput[] | undefined;

  @TypeGraphQL.Field(_type => [DebitsCreateOrConnectWithoutReceiptInput], {
    nullable: true
  })
  connectOrCreate?: DebitsCreateOrConnectWithoutReceiptInput[] | undefined;

  @TypeGraphQL.Field(_type => DebitsCreateManyReceiptInputEnvelope, {
    nullable: true
  })
  createMany?: DebitsCreateManyReceiptInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [DebitsWhereUniqueInput], {
    nullable: true
  })
  connect?: DebitsWhereUniqueInput[] | undefined;
}
