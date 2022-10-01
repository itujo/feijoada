import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostingUnitCreateOrConnectWithoutMovementsInput } from "../inputs/PostingUnitCreateOrConnectWithoutMovementsInput";
import { PostingUnitCreateWithoutMovementsInput } from "../inputs/PostingUnitCreateWithoutMovementsInput";
import { PostingUnitWhereUniqueInput } from "../inputs/PostingUnitWhereUniqueInput";

@TypeGraphQL.InputType("PostingUnitCreateNestedOneWithoutMovementsInput", {
  isAbstract: true
})
export class PostingUnitCreateNestedOneWithoutMovementsInput {
  @TypeGraphQL.Field(_type => PostingUnitCreateWithoutMovementsInput, {
    nullable: true
  })
  create?: PostingUnitCreateWithoutMovementsInput | undefined;

  @TypeGraphQL.Field(_type => PostingUnitCreateOrConnectWithoutMovementsInput, {
    nullable: true
  })
  connectOrCreate?: PostingUnitCreateOrConnectWithoutMovementsInput | undefined;

  @TypeGraphQL.Field(_type => PostingUnitWhereUniqueInput, {
    nullable: true
  })
  connect?: PostingUnitWhereUniqueInput | undefined;
}
