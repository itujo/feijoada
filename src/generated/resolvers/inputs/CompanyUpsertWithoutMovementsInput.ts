import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CompanyCreateWithoutMovementsInput } from "../inputs/CompanyCreateWithoutMovementsInput";
import { CompanyUpdateWithoutMovementsInput } from "../inputs/CompanyUpdateWithoutMovementsInput";

@TypeGraphQL.InputType("CompanyUpsertWithoutMovementsInput", {
  isAbstract: true
})
export class CompanyUpsertWithoutMovementsInput {
  @TypeGraphQL.Field(_type => CompanyUpdateWithoutMovementsInput, {
    nullable: false
  })
  update!: CompanyUpdateWithoutMovementsInput;

  @TypeGraphQL.Field(_type => CompanyCreateWithoutMovementsInput, {
    nullable: false
  })
  create!: CompanyCreateWithoutMovementsInput;
}
