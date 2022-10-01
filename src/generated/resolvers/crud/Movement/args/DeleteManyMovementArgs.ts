import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovementWhereInput } from "../../../inputs/MovementWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyMovementArgs {
  @TypeGraphQL.Field(_type => MovementWhereInput, {
    nullable: true
  })
  where?: MovementWhereInput | undefined;
}
