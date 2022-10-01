import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovementUpdateWithoutFileInput } from "../inputs/MovementUpdateWithoutFileInput";
import { MovementWhereUniqueInput } from "../inputs/MovementWhereUniqueInput";

@TypeGraphQL.InputType("MovementUpdateWithWhereUniqueWithoutFileInput", {
  isAbstract: true
})
export class MovementUpdateWithWhereUniqueWithoutFileInput {
  @TypeGraphQL.Field(_type => MovementWhereUniqueInput, {
    nullable: false
  })
  where!: MovementWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovementUpdateWithoutFileInput, {
    nullable: false
  })
  data!: MovementUpdateWithoutFileInput;
}
