import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovementCreateNestedManyWithoutServiceInput } from "../inputs/MovementCreateNestedManyWithoutServiceInput";

@TypeGraphQL.InputType("ServiceCreateInput", {
  isAbstract: true
})
export class ServiceCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  code!: number;

  @TypeGraphQL.Field(_type => MovementCreateNestedManyWithoutServiceInput, {
    nullable: true
  })
  movements?: MovementCreateNestedManyWithoutServiceInput | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;
}
