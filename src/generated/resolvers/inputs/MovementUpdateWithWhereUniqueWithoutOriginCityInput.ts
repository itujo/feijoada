import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovementUpdateWithoutOriginCityInput } from "../inputs/MovementUpdateWithoutOriginCityInput";
import { MovementWhereUniqueInput } from "../inputs/MovementWhereUniqueInput";

@TypeGraphQL.InputType("MovementUpdateWithWhereUniqueWithoutOriginCityInput", {
  isAbstract: true
})
export class MovementUpdateWithWhereUniqueWithoutOriginCityInput {
  @TypeGraphQL.Field(_type => MovementWhereUniqueInput, {
    nullable: false
  })
  where!: MovementWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovementUpdateWithoutOriginCityInput, {
    nullable: false
  })
  data!: MovementUpdateWithoutOriginCityInput;
}
