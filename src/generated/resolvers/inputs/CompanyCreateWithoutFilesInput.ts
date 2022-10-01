import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovementCreateNestedManyWithoutCenterOfCostInput } from "../inputs/MovementCreateNestedManyWithoutCenterOfCostInput";

@TypeGraphQL.InputType("CompanyCreateWithoutFilesInput", {
  isAbstract: true
})
export class CompanyCreateWithoutFilesInput {
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

  @TypeGraphQL.Field(_type => MovementCreateNestedManyWithoutCenterOfCostInput, {
    nullable: true
  })
  movements?: MovementCreateNestedManyWithoutCenterOfCostInput | undefined;
}
