import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovementCreateWithoutFileInput } from "../inputs/MovementCreateWithoutFileInput";
import { MovementUpdateWithoutFileInput } from "../inputs/MovementUpdateWithoutFileInput";
import { MovementWhereUniqueInput } from "../inputs/MovementWhereUniqueInput";

@TypeGraphQL.InputType("MovementUpsertWithWhereUniqueWithoutFileInput", {
  isAbstract: true
})
export class MovementUpsertWithWhereUniqueWithoutFileInput {
  @TypeGraphQL.Field(_type => MovementWhereUniqueInput, {
    nullable: false
  })
  where!: MovementWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovementUpdateWithoutFileInput, {
    nullable: false
  })
  update!: MovementUpdateWithoutFileInput;

  @TypeGraphQL.Field(_type => MovementCreateWithoutFileInput, {
    nullable: false
  })
  create!: MovementCreateWithoutFileInput;
}
