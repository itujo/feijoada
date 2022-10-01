import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Movement } from "../models/Movement";
import { PostalCardCount } from "../resolvers/outputs/PostalCardCount";

@TypeGraphQL.ObjectType("PostalCard", {
  isAbstract: true
})
export class PostalCard {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  number!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  owner!: string;

  movements?: Movement[];

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => PostalCardCount, {
    nullable: true
  })
  _count?: PostalCardCount | null;
}
