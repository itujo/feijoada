import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostingUnitCreateWithoutMovementsInput } from "../inputs/PostingUnitCreateWithoutMovementsInput";
import { PostingUnitWhereUniqueInput } from "../inputs/PostingUnitWhereUniqueInput";

@TypeGraphQL.InputType("PostingUnitCreateOrConnectWithoutMovementsInput", {
  isAbstract: true
})
export class PostingUnitCreateOrConnectWithoutMovementsInput {
  @TypeGraphQL.Field(_type => PostingUnitWhereUniqueInput, {
    nullable: false
  })
  where!: PostingUnitWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostingUnitCreateWithoutMovementsInput, {
    nullable: false
  })
  create!: PostingUnitCreateWithoutMovementsInput;
}
