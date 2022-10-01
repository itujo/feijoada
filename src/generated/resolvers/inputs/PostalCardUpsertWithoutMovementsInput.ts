import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostalCardCreateWithoutMovementsInput } from "../inputs/PostalCardCreateWithoutMovementsInput";
import { PostalCardUpdateWithoutMovementsInput } from "../inputs/PostalCardUpdateWithoutMovementsInput";

@TypeGraphQL.InputType("PostalCardUpsertWithoutMovementsInput", {
  isAbstract: true
})
export class PostalCardUpsertWithoutMovementsInput {
  @TypeGraphQL.Field(_type => PostalCardUpdateWithoutMovementsInput, {
    nullable: false
  })
  update!: PostalCardUpdateWithoutMovementsInput;

  @TypeGraphQL.Field(_type => PostalCardCreateWithoutMovementsInput, {
    nullable: false
  })
  create!: PostalCardCreateWithoutMovementsInput;
}
