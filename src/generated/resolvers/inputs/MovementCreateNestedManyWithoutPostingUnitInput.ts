import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovementCreateManyPostingUnitInputEnvelope } from "../inputs/MovementCreateManyPostingUnitInputEnvelope";
import { MovementCreateOrConnectWithoutPostingUnitInput } from "../inputs/MovementCreateOrConnectWithoutPostingUnitInput";
import { MovementCreateWithoutPostingUnitInput } from "../inputs/MovementCreateWithoutPostingUnitInput";
import { MovementWhereUniqueInput } from "../inputs/MovementWhereUniqueInput";

@TypeGraphQL.InputType("MovementCreateNestedManyWithoutPostingUnitInput", {
  isAbstract: true
})
export class MovementCreateNestedManyWithoutPostingUnitInput {
  @TypeGraphQL.Field(_type => [MovementCreateWithoutPostingUnitInput], {
    nullable: true
  })
  create?: MovementCreateWithoutPostingUnitInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovementCreateOrConnectWithoutPostingUnitInput], {
    nullable: true
  })
  connectOrCreate?: MovementCreateOrConnectWithoutPostingUnitInput[] | undefined;

  @TypeGraphQL.Field(_type => MovementCreateManyPostingUnitInputEnvelope, {
    nullable: true
  })
  createMany?: MovementCreateManyPostingUnitInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MovementWhereUniqueInput], {
    nullable: true
  })
  connect?: MovementWhereUniqueInput[] | undefined;
}
