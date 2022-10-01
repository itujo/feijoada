import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovementUpdateManyMutationInput } from "../../../inputs/MovementUpdateManyMutationInput";
import { MovementWhereInput } from "../../../inputs/MovementWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMovementArgs {
  @TypeGraphQL.Field(_type => MovementUpdateManyMutationInput, {
    nullable: false
  })
  data!: MovementUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => MovementWhereInput, {
    nullable: true
  })
  where?: MovementWhereInput | undefined;
}
