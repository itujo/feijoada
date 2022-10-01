import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovementUpdateWithoutPostingUnitInput } from "../inputs/MovementUpdateWithoutPostingUnitInput";
import { MovementWhereUniqueInput } from "../inputs/MovementWhereUniqueInput";

@TypeGraphQL.InputType("MovementUpdateWithWhereUniqueWithoutPostingUnitInput", {
  isAbstract: true
})
export class MovementUpdateWithWhereUniqueWithoutPostingUnitInput {
  @TypeGraphQL.Field(_type => MovementWhereUniqueInput, {
    nullable: false
  })
  where!: MovementWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovementUpdateWithoutPostingUnitInput, {
    nullable: false
  })
  data!: MovementUpdateWithoutPostingUnitInput;
}
