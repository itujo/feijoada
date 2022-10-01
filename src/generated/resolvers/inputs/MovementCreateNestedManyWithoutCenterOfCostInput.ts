import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovementCreateManyCenterOfCostInputEnvelope } from "../inputs/MovementCreateManyCenterOfCostInputEnvelope";
import { MovementCreateOrConnectWithoutCenterOfCostInput } from "../inputs/MovementCreateOrConnectWithoutCenterOfCostInput";
import { MovementCreateWithoutCenterOfCostInput } from "../inputs/MovementCreateWithoutCenterOfCostInput";
import { MovementWhereUniqueInput } from "../inputs/MovementWhereUniqueInput";

@TypeGraphQL.InputType("MovementCreateNestedManyWithoutCenterOfCostInput", {
  isAbstract: true
})
export class MovementCreateNestedManyWithoutCenterOfCostInput {
  @TypeGraphQL.Field(_type => [MovementCreateWithoutCenterOfCostInput], {
    nullable: true
  })
  create?: MovementCreateWithoutCenterOfCostInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovementCreateOrConnectWithoutCenterOfCostInput], {
    nullable: true
  })
  connectOrCreate?: MovementCreateOrConnectWithoutCenterOfCostInput[] | undefined;

  @TypeGraphQL.Field(_type => MovementCreateManyCenterOfCostInputEnvelope, {
    nullable: true
  })
  createMany?: MovementCreateManyCenterOfCostInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MovementWhereUniqueInput], {
    nullable: true
  })
  connect?: MovementWhereUniqueInput[] | undefined;
}
