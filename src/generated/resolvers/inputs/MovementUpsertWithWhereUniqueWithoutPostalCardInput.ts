import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovementCreateWithoutPostalCardInput } from "../inputs/MovementCreateWithoutPostalCardInput";
import { MovementUpdateWithoutPostalCardInput } from "../inputs/MovementUpdateWithoutPostalCardInput";
import { MovementWhereUniqueInput } from "../inputs/MovementWhereUniqueInput";

@TypeGraphQL.InputType("MovementUpsertWithWhereUniqueWithoutPostalCardInput", {
  isAbstract: true
})
export class MovementUpsertWithWhereUniqueWithoutPostalCardInput {
  @TypeGraphQL.Field(_type => MovementWhereUniqueInput, {
    nullable: false
  })
  where!: MovementWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovementUpdateWithoutPostalCardInput, {
    nullable: false
  })
  update!: MovementUpdateWithoutPostalCardInput;

  @TypeGraphQL.Field(_type => MovementCreateWithoutPostalCardInput, {
    nullable: false
  })
  create!: MovementCreateWithoutPostalCardInput;
}
