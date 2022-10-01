import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DebitsAvgAggregate } from "../outputs/DebitsAvgAggregate";
import { DebitsCountAggregate } from "../outputs/DebitsCountAggregate";
import { DebitsMaxAggregate } from "../outputs/DebitsMaxAggregate";
import { DebitsMinAggregate } from "../outputs/DebitsMinAggregate";
import { DebitsSumAggregate } from "../outputs/DebitsSumAggregate";

@TypeGraphQL.ObjectType("AggregateDebits", {
  isAbstract: true
})
export class AggregateDebits {
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
