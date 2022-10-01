import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostalCardCreateOrConnectWithoutMovementsInput } from "../inputs/PostalCardCreateOrConnectWithoutMovementsInput";
import { PostalCardCreateWithoutMovementsInput } from "../inputs/PostalCardCreateWithoutMovementsInput";
import { PostalCardWhereUniqueInput } from "../inputs/PostalCardWhereUniqueInput";

@TypeGraphQL.InputType("PostalCardCreateNestedOneWithoutMovementsInput", {
  isAbstract: true
})
export class PostalCardCreateNestedOneWithoutMovementsInput {
  @TypeGraphQL.Field(_type => PostalCardCreateWithoutMovementsInput, {
    nullable: true
  })
  create?: PostalCardCreateWithoutMovementsInput | undefined;

  @TypeGraphQL.Field(_type => PostalCardCreateOrConnectWithoutMovementsInput, {
    nullable: true
  })
  connectOrCreate?: PostalCardCreateOrConnectWithoutMovementsInput | undefined;

  @TypeGraphQL.Field(_type => PostalCardWhereUniqueInput, {
    nullable: true
  })
  connect?: PostalCardWhereUniqueInput | undefined;
}
