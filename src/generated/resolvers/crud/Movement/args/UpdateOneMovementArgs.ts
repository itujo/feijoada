import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovementUpdateInput } from "../../../inputs/MovementUpdateInput";
import { MovementWhereUniqueInput } from "../../../inputs/MovementWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneMovementArgs {
  @TypeGraphQL.Field(_type => MovementUpdateInput, {
    nullable: false
  })
  data!: MovementUpdateInput;

  @TypeGraphQL.Field(_type => MovementWhereUniqueInput, {
    nullable: false
  })
  where!: MovementWhereUniqueInput;
}
