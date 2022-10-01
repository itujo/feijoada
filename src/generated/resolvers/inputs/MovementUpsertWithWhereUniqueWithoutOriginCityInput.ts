import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovementCreateWithoutOriginCityInput } from "../inputs/MovementCreateWithoutOriginCityInput";
import { MovementUpdateWithoutOriginCityInput } from "../inputs/MovementUpdateWithoutOriginCityInput";
import { MovementWhereUniqueInput } from "../inputs/MovementWhereUniqueInput";

@TypeGraphQL.InputType("MovementUpsertWithWhereUniqueWithoutOriginCityInput", {
  isAbstract: true
})
export class MovementUpsertWithWhereUniqueWithoutOriginCityInput {
  @TypeGraphQL.Field(_type => MovementWhereUniqueInput, {
    nullable: false
  })
  where!: MovementWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovementUpdateWithoutOriginCityInput, {
    nullable: false
  })
  update!: MovementUpdateWithoutOriginCityInput;

  @TypeGraphQL.Field(_type => MovementCreateWithoutOriginCityInput, {
    nullable: false
  })
  create!: MovementCreateWithoutOriginCityInput;
}
