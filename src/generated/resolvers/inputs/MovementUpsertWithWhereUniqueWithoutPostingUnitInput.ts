import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovementCreateWithoutPostingUnitInput } from "../inputs/MovementCreateWithoutPostingUnitInput";
import { MovementUpdateWithoutPostingUnitInput } from "../inputs/MovementUpdateWithoutPostingUnitInput";
import { MovementWhereUniqueInput } from "../inputs/MovementWhereUniqueInput";

@TypeGraphQL.InputType("MovementUpsertWithWhereUniqueWithoutPostingUnitInput", {
  isAbstract: true
})
export class MovementUpsertWithWhereUniqueWithoutPostingUnitInput {
  @TypeGraphQL.Field(_type => MovementWhereUniqueInput, {
    nullable: false
  })
  where!: MovementWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovementUpdateWithoutPostingUnitInput, {
    nullable: false
  })
  update!: MovementUpdateWithoutPostingUnitInput;

  @TypeGraphQL.Field(_type => MovementCreateWithoutPostingUnitInput, {
    nullable: false
  })
  create!: MovementCreateWithoutPostingUnitInput;
}
