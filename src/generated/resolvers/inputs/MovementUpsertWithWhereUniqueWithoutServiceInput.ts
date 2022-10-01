import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovementCreateWithoutServiceInput } from "../inputs/MovementCreateWithoutServiceInput";
import { MovementUpdateWithoutServiceInput } from "../inputs/MovementUpdateWithoutServiceInput";
import { MovementWhereUniqueInput } from "../inputs/MovementWhereUniqueInput";

@TypeGraphQL.InputType("MovementUpsertWithWhereUniqueWithoutServiceInput", {
  isAbstract: true
})
export class MovementUpsertWithWhereUniqueWithoutServiceInput {
  @TypeGraphQL.Field(_type => MovementWhereUniqueInput, {
    nullable: false
  })
  where!: MovementWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovementUpdateWithoutServiceInput, {
    nullable: false
  })
  update!: MovementUpdateWithoutServiceInput;

  @TypeGraphQL.Field(_type => MovementCreateWithoutServiceInput, {
    nullable: false
  })
  create!: MovementCreateWithoutServiceInput;
}
