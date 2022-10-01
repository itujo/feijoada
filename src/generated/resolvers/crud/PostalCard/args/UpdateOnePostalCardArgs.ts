import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostalCardUpdateInput } from "../../../inputs/PostalCardUpdateInput";
import { PostalCardWhereUniqueInput } from "../../../inputs/PostalCardWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePostalCardArgs {
  @TypeGraphQL.Field(_type => PostalCardUpdateInput, {
    nullable: false
  })
  data!: PostalCardUpdateInput;

  @TypeGraphQL.Field(_type => PostalCardWhereUniqueInput, {
    nullable: false
  })
  where!: PostalCardWhereUniqueInput;
}
