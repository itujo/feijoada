import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovementCreateWithoutOriginCityInput } from "../inputs/MovementCreateWithoutOriginCityInput";
import { MovementWhereUniqueInput } from "../inputs/MovementWhereUniqueInput";

@TypeGraphQL.InputType("MovementCreateOrConnectWithoutOriginCityInput", {
  isAbstract: true
})
export class MovementCreateOrConnectWithoutOriginCityInput {
  @TypeGraphQL.Field(_type => MovementWhereUniqueInput, {
    nullable: false
  })
  where!: MovementWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovementCreateWithoutOriginCityInput, {
    nullable: false
  })
  create!: MovementCreateWithoutOriginCityInput;
}
