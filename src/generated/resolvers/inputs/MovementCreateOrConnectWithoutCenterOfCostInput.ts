import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovementCreateWithoutCenterOfCostInput } from "../inputs/MovementCreateWithoutCenterOfCostInput";
import { MovementWhereUniqueInput } from "../inputs/MovementWhereUniqueInput";

@TypeGraphQL.InputType("MovementCreateOrConnectWithoutCenterOfCostInput", {
  isAbstract: true
})
export class MovementCreateOrConnectWithoutCenterOfCostInput {
  @TypeGraphQL.Field(_type => MovementWhereUniqueInput, {
    nullable: false
  })
  where!: MovementWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovementCreateWithoutCenterOfCostInput, {
    nullable: false
  })
  create!: MovementCreateWithoutCenterOfCostInput;
}
