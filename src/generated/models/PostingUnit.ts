import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Movement } from "../models/Movement";
import { PostingUnitCount } from "../resolvers/outputs/PostingUnitCount";

@TypeGraphQL.ObjectType("PostingUnit", {
  isAbstract: true
})
export class PostingUnit {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  movements?: Movement[];

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => PostingUnitCount, {
    nullable: true
  })
  _count?: PostingUnitCount | null;
}
