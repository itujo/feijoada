import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovementCreateWithoutCenterOfCostInput } from "../inputs/MovementCreateWithoutCenterOfCostInput";
import { MovementUpdateWithoutCenterOfCostInput } from "../inputs/MovementUpdateWithoutCenterOfCostInput";
import { MovementWhereUniqueInput } from "../inputs/MovementWhereUniqueInput";

@TypeGraphQL.InputType("MovementUpsertWithWhereUniqueWithoutCenterOfCostInput", {
  isAbstract: true
})
export class MovementUpsertWithWhereUniqueWithoutCenterOfCostInput {
  @TypeGraphQL.Field(_type => MovementWhereUniqueInput, {
    nullable: false
  })
  where!: MovementWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovementUpdateWithoutCenterOfCostInput, {
    nullable: false
  })
  update!: MovementUpdateWithoutCenterOfCostInput;

  @TypeGraphQL.Field(_type => MovementCreateWithoutCenterOfCostInput, {
    nullable: false
  })
  create!: MovementCreateWithoutCenterOfCostInput;
}
