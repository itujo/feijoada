import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostalCardCreateInput } from "../../../inputs/PostalCardCreateInput";
import { PostalCardUpdateInput } from "../../../inputs/PostalCardUpdateInput";
import { PostalCardWhereUniqueInput } from "../../../inputs/PostalCardWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePostalCardArgs {
  @TypeGraphQL.Field(_type => PostalCardWhereUniqueInput, {
    nullable: false
  })
  where!: PostalCardWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostalCardCreateInput, {
    nullable: false
  })
  create!: PostalCardCreateInput;

  @TypeGraphQL.Field(_type => PostalCardUpdateInput, {
    nullable: false
  })
  update!: PostalCardUpdateInput;
}
