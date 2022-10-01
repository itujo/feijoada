import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostalCardCreateOrConnectWithoutMovementsInput } from "../inputs/PostalCardCreateOrConnectWithoutMovementsInput";
import { PostalCardCreateWithoutMovementsInput } from "../inputs/PostalCardCreateWithoutMovementsInput";
import { PostalCardUpdateWithoutMovementsInput } from "../inputs/PostalCardUpdateWithoutMovementsInput";
import { PostalCardUpsertWithoutMovementsInput } from "../inputs/PostalCardUpsertWithoutMovementsInput";
import { PostalCardWhereUniqueInput } from "../inputs/PostalCardWhereUniqueInput";

@TypeGraphQL.InputType("PostalCardUpdateOneRequiredWithoutMovementsNestedInput", {
  isAbstract: true
})
export class PostalCardUpdateOneRequiredWithoutMovementsNestedInput {
  @TypeGraphQL.Field(_type => PostalCardCreateWithoutMovementsInput, {
    nullable: true
  })
  create?: PostalCardCreateWithoutMovementsInput | undefined;

  @TypeGraphQL.Field(_type => PostalCardCreateOrConnectWithoutMovementsInput, {
    nullable: true
  })
  connectOrCreate?: PostalCardCreateOrConnectWithoutMovementsInput | undefined;

  @TypeGraphQL.Field(_type => PostalCardUpsertWithoutMovementsInput, {
    nullable: true
  })
  upsert?: PostalCardUpsertWithoutMovementsInput | undefined;

  @TypeGraphQL.Field(_type => PostalCardWhereUniqueInput, {
    nullable: true
  })
  connect?: PostalCardWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PostalCardUpdateWithoutMovementsInput, {
    nullable: true
  })
  update?: PostalCardUpdateWithoutMovementsInput | undefined;
}
