import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovementCreateWithoutFileInput } from "../inputs/MovementCreateWithoutFileInput";
import { MovementWhereUniqueInput } from "../inputs/MovementWhereUniqueInput";

@TypeGraphQL.InputType("MovementCreateOrConnectWithoutFileInput", {
  isAbstract: true
})
export class MovementCreateOrConnectWithoutFileInput {
  @TypeGraphQL.Field(_type => MovementWhereUniqueInput, {
    nullable: false
  })
  where!: MovementWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovementCreateWithoutFileInput, {
    nullable: false
  })
  create!: MovementCreateWithoutFileInput;
}
