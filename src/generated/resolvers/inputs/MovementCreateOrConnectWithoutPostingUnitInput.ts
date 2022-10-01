import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovementCreateWithoutPostingUnitInput } from "../inputs/MovementCreateWithoutPostingUnitInput";
import { MovementWhereUniqueInput } from "../inputs/MovementWhereUniqueInput";

@TypeGraphQL.InputType("MovementCreateOrConnectWithoutPostingUnitInput", {
  isAbstract: true
})
export class MovementCreateOrConnectWithoutPostingUnitInput {
  @TypeGraphQL.Field(_type => MovementWhereUniqueInput, {
    nullable: false
  })
  where!: MovementWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovementCreateWithoutPostingUnitInput, {
    nullable: false
  })
  create!: MovementCreateWithoutPostingUnitInput;
}
