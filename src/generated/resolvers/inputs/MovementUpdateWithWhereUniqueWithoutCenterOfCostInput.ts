import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovementUpdateWithoutCenterOfCostInput } from "../inputs/MovementUpdateWithoutCenterOfCostInput";
import { MovementWhereUniqueInput } from "../inputs/MovementWhereUniqueInput";

@TypeGraphQL.InputType("MovementUpdateWithWhereUniqueWithoutCenterOfCostInput", {
  isAbstract: true
})
export class MovementUpdateWithWhereUniqueWithoutCenterOfCostInput {
  @TypeGraphQL.Field(_type => MovementWhereUniqueInput, {
    nullable: false
  })
  where!: MovementWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovementUpdateWithoutCenterOfCostInput, {
    nullable: false
  })
  data!: MovementUpdateWithoutCenterOfCostInput;
}
