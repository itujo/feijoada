import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostingUnitCreateOrConnectWithoutMovementsInput } from "../inputs/PostingUnitCreateOrConnectWithoutMovementsInput";
import { PostingUnitCreateWithoutMovementsInput } from "../inputs/PostingUnitCreateWithoutMovementsInput";
import { PostingUnitUpdateWithoutMovementsInput } from "../inputs/PostingUnitUpdateWithoutMovementsInput";
import { PostingUnitUpsertWithoutMovementsInput } from "../inputs/PostingUnitUpsertWithoutMovementsInput";
import { PostingUnitWhereUniqueInput } from "../inputs/PostingUnitWhereUniqueInput";

@TypeGraphQL.InputType("PostingUnitUpdateOneRequiredWithoutMovementsNestedInput", {
  isAbstract: true
})
export class PostingUnitUpdateOneRequiredWithoutMovementsNestedInput {
  @TypeGraphQL.Field(_type => PostingUnitCreateWithoutMovementsInput, {
    nullable: true
  })
  create?: PostingUnitCreateWithoutMovementsInput | undefined;

  @TypeGraphQL.Field(_type => PostingUnitCreateOrConnectWithoutMovementsInput, {
    nullable: true
  })
  connectOrCreate?: PostingUnitCreateOrConnectWithoutMovementsInput | undefined;

  @TypeGraphQL.Field(_type => PostingUnitUpsertWithoutMovementsInput, {
    nullable: true
  })
  upsert?: PostingUnitUpsertWithoutMovementsInput | undefined;

  @TypeGraphQL.Field(_type => PostingUnitWhereUniqueInput, {
    nullable: true
  })
  connect?: PostingUnitWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PostingUnitUpdateWithoutMovementsInput, {
    nullable: true
  })
  update?: PostingUnitUpdateWithoutMovementsInput | undefined;
}
