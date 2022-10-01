import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DebitsCreateManyReceiptInput } from "../inputs/DebitsCreateManyReceiptInput";

@TypeGraphQL.InputType("DebitsCreateManyReceiptInputEnvelope", {
  isAbstract: true
})
export class DebitsCreateManyReceiptInputEnvelope {
  @TypeGraphQL.Field(_type => [DebitsCreateManyReceiptInput], {
    nullable: false
  })
  data!: DebitsCreateManyReceiptInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
