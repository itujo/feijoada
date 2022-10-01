import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CompanyCreateOrConnectWithoutMovementsInput } from "../inputs/CompanyCreateOrConnectWithoutMovementsInput";
import { CompanyCreateWithoutMovementsInput } from "../inputs/CompanyCreateWithoutMovementsInput";
import { CompanyUpdateWithoutMovementsInput } from "../inputs/CompanyUpdateWithoutMovementsInput";
import { CompanyUpsertWithoutMovementsInput } from "../inputs/CompanyUpsertWithoutMovementsInput";
import { CompanyWhereUniqueInput } from "../inputs/CompanyWhereUniqueInput";

@TypeGraphQL.InputType("CompanyUpdateOneRequiredWithoutMovementsNestedInput", {
  isAbstract: true
})
export class CompanyUpdateOneRequiredWithoutMovementsNestedInput {
  @TypeGraphQL.Field(_type => CompanyCreateWithoutMovementsInput, {
    nullable: true
  })
  create?: CompanyCreateWithoutMovementsInput | undefined;

  @TypeGraphQL.Field(_type => CompanyCreateOrConnectWithoutMovementsInput, {
    nullable: true
  })
  connectOrCreate?: CompanyCreateOrConnectWithoutMovementsInput | undefined;

  @TypeGraphQL.Field(_type => CompanyUpsertWithoutMovementsInput, {
    nullable: true
  })
  upsert?: CompanyUpsertWithoutMovementsInput | undefined;

  @TypeGraphQL.Field(_type => CompanyWhereUniqueInput, {
    nullable: true
  })
  connect?: CompanyWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CompanyUpdateWithoutMovementsInput, {
    nullable: true
  })
  update?: CompanyUpdateWithoutMovementsInput | undefined;
}
