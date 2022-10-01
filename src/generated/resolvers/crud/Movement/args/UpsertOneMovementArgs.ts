import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovementCreateInput } from "../../../inputs/MovementCreateInput";
import { MovementUpdateInput } from "../../../inputs/MovementUpdateInput";
import { MovementWhereUniqueInput } from "../../../inputs/MovementWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneMovementArgs {
  @TypeGraphQL.Field(_type => MovementWhereUniqueInput, {
    nullable: false
  })
  where!: MovementWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovementCreateInput, {
    nullable: false
  })
  create!: MovementCreateInput;

  @TypeGraphQL.Field(_type => MovementUpdateInput, {
    nullable: false
  })
  update!: MovementUpdateInput;
}
