import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DebitsCreateManyInput } from "../../../inputs/DebitsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyDebitsArgs {
  @TypeGraphQL.Field(_type => [DebitsCreateManyInput], {
    nullable: false
  })
  data!: DebitsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
