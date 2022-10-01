import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovementCreateWithoutServiceInput } from "../inputs/MovementCreateWithoutServiceInput";
import { MovementWhereUniqueInput } from "../inputs/MovementWhereUniqueInput";

@TypeGraphQL.InputType("MovementCreateOrConnectWithoutServiceInput", {
  isAbstract: true
})
export class MovementCreateOrConnectWithoutServiceInput {
  @TypeGraphQL.Field(_type => MovementWhereUniqueInput, {
    nullable: false
  })
  where!: MovementWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovementCreateWithoutServiceInput, {
    nullable: false
  })
  create!: MovementCreateWithoutServiceInput;
}
