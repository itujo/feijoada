import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DebitsAvgAggregate } from "../outputs/DebitsAvgAggregate";
import { DebitsCountAggregate } from "../outputs/DebitsCountAggregate";
import { DebitsMaxAggregate } from "../outputs/DebitsMaxAggregate";
import { DebitsMinAggregate } from "../outputs/DebitsMinAggregate";
import { DebitsSumAggregate } from "../outputs/DebitsSumAggregate";

@TypeGraphQL.ObjectType("DebitsGroupBy", {
  isAbstract: true
})
export class DebitsGroupBy {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  id!: bigint;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  value!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  date!: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  fileId!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => DebitsCountAggregate, {
    nullable: true
  })
  _count!: DebitsCountAggregate | null;

  @TypeGraphQL.Field(_type => DebitsAvgAggregate, {
    nullable: true
  })
  _avg!: DebitsAvgAggregate | null;

  @TypeGraphQL.Field(_type => DebitsSumAggregate, {
    nullable: true
  })
  _sum!: DebitsSumAggregate | null;

  @TypeGraphQL.Field(_type => DebitsMinAggregate, {
    nullable: true
  })
  _min!: DebitsMinAggregate | null;

  @TypeGraphQL.Field(_type => DebitsMaxAggregate, {
    nullable: true
  })
  _max!: DebitsMaxAggregate | null;
}
