import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CityCreateNestedManyWithoutStateInput } from "../inputs/CityCreateNestedManyWithoutStateInput";

@TypeGraphQL.InputType("StateCreateInput", {
  isAbstract: true
})
export class StateCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => CityCreateNestedManyWithoutStateInput, {
    nullable: true
  })
  cities?: CityCreateNestedManyWithoutStateInput | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;
}
