import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovementWhereUniqueInput } from "../../../inputs/MovementWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneMovementArgs {
  @TypeGraphQL.Field(_type => MovementWhereUniqueInput, {
    nullable: false
  })
  where!: MovementWhereUniqueInput;
}
