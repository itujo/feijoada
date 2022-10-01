import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { File } from "../models/File";
import { Movement } from "../models/Movement";
import { CompanyCount } from "../resolvers/outputs/CompanyCount";

@TypeGraphQL.ObjectType("Company", {
  isAbstract: true
})
export class Company {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

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
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  files?: File[];

  movements?: Movement[];

  @TypeGraphQL.Field(_type => CompanyCount, {
    nullable: true
  })
  _count?: CompanyCount | null;
}
