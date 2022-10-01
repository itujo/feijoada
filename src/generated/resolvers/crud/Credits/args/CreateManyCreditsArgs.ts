import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CreditsCreateManyInput } from "../../../inputs/CreditsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCreditsArgs {
  @TypeGraphQL.Field(_type => [CreditsCreateManyInput], {
    nullable: false
  })
  data!: CreditsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
