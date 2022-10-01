import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("CompanyWhereUniqueInput", {
  isAbstract: true
})
export class CompanyWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  cnpj?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  clientCode?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  contractNumber?: string | undefined;
}
