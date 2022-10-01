import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovementUpdateWithoutPostalCardInput } from "../inputs/MovementUpdateWithoutPostalCardInput";
import { MovementWhereUniqueInput } from "../inputs/MovementWhereUniqueInput";

@TypeGraphQL.InputType("MovementUpdateWithWhereUniqueWithoutPostalCardInput", {
  isAbstract: true
})
export class MovementUpdateWithWhereUniqueWithoutPostalCardInput {
  @TypeGraphQL.Field(_type => MovementWhereUniqueInput, {
    nullable: false
  })
  where!: MovementWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovementUpdateWithoutPostalCardInput, {
    nullable: false
  })
  data!: MovementUpdateWithoutPostalCardInput;
}
