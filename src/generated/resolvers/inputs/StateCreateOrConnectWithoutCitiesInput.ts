import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StateCreateWithoutCitiesInput } from "../inputs/StateCreateWithoutCitiesInput";
import { StateWhereUniqueInput } from "../inputs/StateWhereUniqueInput";

@TypeGraphQL.InputType("StateCreateOrConnectWithoutCitiesInput", {
  isAbstract: true
})
export class StateCreateOrConnectWithoutCitiesInput {
  @TypeGraphQL.Field(_type => StateWhereUniqueInput, {
    nullable: false
  })
  where!: StateWhereUniqueInput;

  @TypeGraphQL.Field(_type => StateCreateWithoutCitiesInput, {
    nullable: false
  })
  create!: StateCreateWithoutCitiesInput;
}
