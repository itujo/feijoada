import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovementCreateManyInput } from "../../../inputs/MovementCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMovementArgs {
  @TypeGraphQL.Field(_type => [MovementCreateManyInput], {
    nullable: false
  })
  data!: MovementCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
