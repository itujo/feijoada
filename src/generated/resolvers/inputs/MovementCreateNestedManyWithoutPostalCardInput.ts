import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovementCreateManyPostalCardInputEnvelope } from "../inputs/MovementCreateManyPostalCardInputEnvelope";
import { MovementCreateOrConnectWithoutPostalCardInput } from "../inputs/MovementCreateOrConnectWithoutPostalCardInput";
import { MovementCreateWithoutPostalCardInput } from "../inputs/MovementCreateWithoutPostalCardInput";
import { MovementWhereUniqueInput } from "../inputs/MovementWhereUniqueInput";

@TypeGraphQL.InputType("MovementCreateNestedManyWithoutPostalCardInput", {
  isAbstract: true
})
export class MovementCreateNestedManyWithoutPostalCardInput {
  @TypeGraphQL.Field(_type => [MovementCreateWithoutPostalCardInput], {
    nullable: true
  })
  create?: MovementCreateWithoutPostalCardInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovementCreateOrConnectWithoutPostalCardInput], {
    nullable: true
  })
  connectOrCreate?: MovementCreateOrConnectWithoutPostalCardInput[] | undefined;

  @TypeGraphQL.Field(_type => MovementCreateManyPostalCardInputEnvelope, {
    nullable: true
  })
  createMany?: MovementCreateManyPostalCardInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MovementWhereUniqueInput], {
    nullable: true
  })
  connect?: MovementWhereUniqueInput[] | undefined;
}
