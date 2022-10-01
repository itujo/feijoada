import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostalCardCreateManyInput } from "../../../inputs/PostalCardCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPostalCardArgs {
  @TypeGraphQL.Field(_type => [PostalCardCreateManyInput], {
    nullable: false
  })
  data!: PostalCardCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
