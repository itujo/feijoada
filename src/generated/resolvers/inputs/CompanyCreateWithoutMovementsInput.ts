import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FileCreateNestedManyWithoutCompanyInput } from "../inputs/FileCreateNestedManyWithoutCompanyInput";

@TypeGraphQL.InputType("CompanyCreateWithoutMovementsInput", {
  isAbstract: true
})
export class CompanyCreateWithoutMovementsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  cnpj!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  clientCode!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  contractNumber!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  contractDr!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => FileCreateNestedManyWithoutCompanyInput, {
    nullable: true
  })
  files?: FileCreateNestedManyWithoutCompanyInput | undefined;
}
