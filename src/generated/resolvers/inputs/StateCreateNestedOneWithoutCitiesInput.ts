import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StateCreateOrConnectWithoutCitiesInput } from "../inputs/StateCreateOrConnectWithoutCitiesInput";
import { StateCreateWithoutCitiesInput } from "../inputs/StateCreateWithoutCitiesInput";
import { StateWhereUniqueInput } from "../inputs/StateWhereUniqueInput";

@TypeGraphQL.InputType("StateCreateNestedOneWithoutCitiesInput", {
  isAbstract: true
})
export class StateCreateNestedOneWithoutCitiesInput {
  @TypeGraphQL.Field(_type => StateCreateWithoutCitiesInput, {
    nullable: true
  })
  create?: StateCreateWithoutCitiesInput | undefined;

  @TypeGraphQL.Field(_type => StateCreateOrConnectWithoutCitiesInput, {
    nullable: true
  })
  connectOrCreate?: StateCreateOrConnectWithoutCitiesInput | undefined;

  @TypeGraphQL.Field(_type => StateWhereUniqueInput, {
    nullable: true
  })
  connect?: StateWhereUniqueInput | undefined;
}
