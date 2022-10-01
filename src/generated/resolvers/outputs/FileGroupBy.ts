import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FileAvgAggregate } from "../outputs/FileAvgAggregate";
import { FileCountAggregate } from "../outputs/FileCountAggregate";
import { FileMaxAggregate } from "../outputs/FileMaxAggregate";
import { FileMinAggregate } from "../outputs/FileMinAggregate";
import { FileSumAggregate } from "../outputs/FileSumAggregate";
import { FileTypes } from "../../enums/FileTypes";

@TypeGraphQL.ObjectType("FileGroupBy", {
  isAbstract: true
})
export class FileGroupBy {
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

  @TypeGraphQL.Field(_type => FileCountAggregate, {
    nullable: true
  })
  _count!: FileCountAggregate | null;

  @TypeGraphQL.Field(_type => FileAvgAggregate, {
    nullable: true
  })
  _avg!: FileAvgAggregate | null;

  @TypeGraphQL.Field(_type => FileSumAggregate, {
    nullable: true
  })
  _sum!: FileSumAggregate | null;

  @TypeGraphQL.Field(_type => FileMinAggregate, {
    nullable: true
  })
  _min!: FileMinAggregate | null;

  @TypeGraphQL.Field(_type => FileMaxAggregate, {
    nullable: true
  })
  _max!: FileMaxAggregate | null;
}
