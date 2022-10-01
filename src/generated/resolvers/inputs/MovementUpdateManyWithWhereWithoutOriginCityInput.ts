import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovementScalarWhereInput } from "../inputs/MovementScalarWhereInput";
import { MovementUpdateManyMutationInput } from "../inputs/MovementUpdateManyMutationInput";

@TypeGraphQL.InputType("MovementUpdateManyWithWhereWithoutOriginCityInput", {
  isAbstract: true
})
export class MovementUpdateManyWithWhereWithoutOriginCityInput {
  @TypeGraphQL.Field(_type => MovementScalarWhereInput, {
    nullable: false
  })
  where!: MovementScalarWhereInput;

  @TypeGraphQL.Field(_type => MovementUpdateManyMutationInput, {
    nullable: false
  })
  data!: MovementUpdateManyMutationInput;
}
