import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FileCreateNestedManyWithoutCompanyInput } from "../inputs/FileCreateNestedManyWithoutCompanyInput";
import { MovementCreateNestedManyWithoutCenterOfCostInput } from "../inputs/MovementCreateNestedManyWithoutCenterOfCostInput";

@TypeGraphQL.InputType("CompanyCreateInput", {
  isAbstract: true
})
export class CompanyCreateInput {
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

  @TypeGraphQL.Field(_type => MovementCreateNestedManyWithoutCenterOfCostInput, {
    nullable: true
  })
  movements?: MovementCreateNestedManyWithoutCenterOfCostInput | undefined;
}
