import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StateCreateWithoutCitiesInput } from "../inputs/StateCreateWithoutCitiesInput";
import { StateUpdateWithoutCitiesInput } from "../inputs/StateUpdateWithoutCitiesInput";

@TypeGraphQL.InputType("StateUpsertWithoutCitiesInput", {
  isAbstract: true
})
export class StateUpsertWithoutCitiesInput {
  @TypeGraphQL.Field(_type => StateUpdateWithoutCitiesInput, {
    nullable: false
  })
  update!: StateUpdateWithoutCitiesInput;

  @TypeGraphQL.Field(_type => StateCreateWithoutCitiesInput, {
    nullable: false
  })
  create!: StateCreateWithoutCitiesInput;
}
