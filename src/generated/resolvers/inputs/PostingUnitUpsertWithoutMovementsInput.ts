import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostingUnitCreateWithoutMovementsInput } from "../inputs/PostingUnitCreateWithoutMovementsInput";
import { PostingUnitUpdateWithoutMovementsInput } from "../inputs/PostingUnitUpdateWithoutMovementsInput";

@TypeGraphQL.InputType("PostingUnitUpsertWithoutMovementsInput", {
  isAbstract: true
})
export class PostingUnitUpsertWithoutMovementsInput {
  @TypeGraphQL.Field(_type => PostingUnitUpdateWithoutMovementsInput, {
    nullable: false
  })
  update!: PostingUnitUpdateWithoutMovementsInput;

  @TypeGraphQL.Field(_type => PostingUnitCreateWithoutMovementsInput, {
    nullable: false
  })
  create!: PostingUnitCreateWithoutMovementsInput;
}
