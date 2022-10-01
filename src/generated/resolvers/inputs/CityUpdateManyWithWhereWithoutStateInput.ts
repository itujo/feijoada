import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CityScalarWhereInput } from "../inputs/CityScalarWhereInput";
import { CityUpdateManyMutationInput } from "../inputs/CityUpdateManyMutationInput";

@TypeGraphQL.InputType("CityUpdateManyWithWhereWithoutStateInput", {
  isAbstract: true
})
export class CityUpdateManyWithWhereWithoutStateInput {
  @TypeGraphQL.Field(_type => CityScalarWhereInput, {
    nullable: false
  })
  where!: CityScalarWhereInput;

  @TypeGraphQL.Field(_type => CityUpdateManyMutationInput, {
    nullable: false
  })
  data!: CityUpdateManyMutationInput;
}
