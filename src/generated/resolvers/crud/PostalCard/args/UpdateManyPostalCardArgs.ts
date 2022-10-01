import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostalCardUpdateManyMutationInput } from "../../../inputs/PostalCardUpdateManyMutationInput";
import { PostalCardWhereInput } from "../../../inputs/PostalCardWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPostalCardArgs {
  @TypeGraphQL.Field(_type => PostalCardUpdateManyMutationInput, {
    nullable: false
  })
  data!: PostalCardUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PostalCardWhereInput, {
    nullable: true
  })
  where?: PostalCardWhereInput | undefined;
}
