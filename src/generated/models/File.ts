import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Company } from "../models/Company";
import { Credits } from "../models/Credits";
import { Debits } from "../models/Debits";
import { Movement } from "../models/Movement";
import { FileTypes } from "../enums/FileTypes";
import { FileCount } from "../resolvers/outputs/FileCount";

@TypeGraphQL.ObjectType("File", {
  isAbstract: true
})
export class File {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  date!: Date;

  debits?: Debits[];

  credits?: Credits[];

  movements?: Movement[];

  company?: Company;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  companyId!: number;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  processed!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  movementsProcessed!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  creditsProcessed!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  debitsProcessed!: boolean;

  @TypeGraphQL.Field(_type => FileTypes, {
    nullable: false
  })
  fileType!: "NATIONAL" | "INTERNATIONAL";

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => FileCount, {
    nullable: true
  })
  _count?: FileCount | null;
}
