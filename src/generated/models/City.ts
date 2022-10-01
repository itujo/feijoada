import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Movement } from "../models/Movement";
import { State } from "../models/State";
import { CityCount } from "../resolvers/outputs/CityCount";

@TypeGraphQL.ObjectType("City", {
  isAbstract: true
})
export class City {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | null;

  state?: State | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  stateId?: number | null;

  movementsOriginCity?: Movement[];

  destinationOriginCity?: Movement[];

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => CityCount, {
    nullable: true
  })
  _count?: CityCount | null;
}
