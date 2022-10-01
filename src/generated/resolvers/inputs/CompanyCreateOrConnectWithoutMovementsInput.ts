import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CompanyCreateWithoutMovementsInput } from "../inputs/CompanyCreateWithoutMovementsInput";
import { CompanyWhereUniqueInput } from "../inputs/CompanyWhereUniqueInput";

@TypeGraphQL.InputType("CompanyCreateOrConnectWithoutMovementsInput", {
  isAbstract: true
})
export class CompanyCreateOrConnectWithoutMovementsInput {
  @TypeGraphQL.Field(_type => CompanyWhereUniqueInput, {
    nullable: false
  })
  where!: CompanyWhereUniqueInput;

  @TypeGraphQL.Field(_type => CompanyCreateWithoutMovementsInput, {
    nullable: false
  })
  create!: CompanyCreateWithoutMovementsInput;
}
