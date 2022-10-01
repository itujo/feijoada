import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovementUpdateWithoutServiceInput } from "../inputs/MovementUpdateWithoutServiceInput";
import { MovementWhereUniqueInput } from "../inputs/MovementWhereUniqueInput";

@TypeGraphQL.InputType("MovementUpdateWithWhereUniqueWithoutServiceInput", {
  isAbstract: true
})
export class MovementUpdateWithWhereUniqueWithoutServiceInput {
  @TypeGraphQL.Field(_type => MovementWhereUniqueInput, {
    nullable: false
  })
  where!: MovementWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovementUpdateWithoutServiceInput, {
    nullable: false
  })
  data!: MovementUpdateWithoutServiceInput;
}
