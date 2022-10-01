import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovementCreateInput } from "../../../inputs/MovementCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneMovementArgs {
  @TypeGraphQL.Field(_type => MovementCreateInput, {
    nullable: false
  })
  data!: MovementCreateInput;
}
