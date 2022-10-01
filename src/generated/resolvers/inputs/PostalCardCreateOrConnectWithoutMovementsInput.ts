import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostalCardCreateWithoutMovementsInput } from "../inputs/PostalCardCreateWithoutMovementsInput";
import { PostalCardWhereUniqueInput } from "../inputs/PostalCardWhereUniqueInput";

@TypeGraphQL.InputType("PostalCardCreateOrConnectWithoutMovementsInput", {
  isAbstract: true
})
export class PostalCardCreateOrConnectWithoutMovementsInput {
  @TypeGraphQL.Field(_type => PostalCardWhereUniqueInput, {
    nullable: false
  })
  where!: PostalCardWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostalCardCreateWithoutMovementsInput, {
    nullable: false
  })
  create!: PostalCardCreateWithoutMovementsInput;
}
