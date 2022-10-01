import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FileTypes } from "../../enums/FileTypes";

@TypeGraphQL.ObjectType("FileMinAggregate", {
  isAbstract: true
})
export class FileMinAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  date!: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  companyId!: number | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  processed!: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  movementsProcessed!: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  creditsProcessed!: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  debitsProcessed!: boolean | null;

  @TypeGraphQL.Field(_type => FileTypes, {
    nullable: true
  })
  fileType!: "NATIONAL" | "INTERNATIONAL" | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;
}
