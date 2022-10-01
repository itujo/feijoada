import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CreditsAvgAggregate } from "../outputs/CreditsAvgAggregate";
import { CreditsCountAggregate } from "../outputs/CreditsCountAggregate";
import { CreditsMaxAggregate } from "../outputs/CreditsMaxAggregate";
import { CreditsMinAggregate } from "../outputs/CreditsMinAggregate";
import { CreditsSumAggregate } from "../outputs/CreditsSumAggregate";

@TypeGraphQL.ObjectType("CreditsGroupBy", {
  isAbstract: true
})
export class CreditsGroupBy {
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

  @TypeGraphQL.Field(_type => CreditsCountAggregate, {
    nullable: true
  })
  _count!: CreditsCountAggregate | null;

  @TypeGraphQL.Field(_type => CreditsAvgAggregate, {
    nullable: true
  })
  _avg!: CreditsAvgAggregate | null;

  @TypeGraphQL.Field(_type => CreditsSumAggregate, {
    nullable: true
  })
  _sum!: CreditsSumAggregate | null;

  @TypeGraphQL.Field(_type => CreditsMinAggregate, {
    nullable: true
  })
  _min!: CreditsMinAggregate | null;

  @TypeGraphQL.Field(_type => CreditsMaxAggregate, {
    nullable: true
  })
  _max!: CreditsMaxAggregate | null;
}
