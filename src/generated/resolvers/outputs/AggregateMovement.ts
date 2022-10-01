import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovementAvgAggregate } from "../outputs/MovementAvgAggregate";
import { MovementCountAggregate } from "../outputs/MovementCountAggregate";
import { MovementMaxAggregate } from "../outputs/MovementMaxAggregate";
import { MovementMinAggregate } from "../outputs/MovementMinAggregate";
import { MovementSumAggregate } from "../outputs/MovementSumAggregate";

@TypeGraphQL.ObjectType("AggregateMovement", {
  isAbstract: true
})
export class AggregateMovement {
  @TypeGraphQL.Field(_type => MovementCountAggregate, {
    nullable: true
  })
  _count!: MovementCountAggregate | null;

  @TypeGraphQL.Field(_type => MovementAvgAggregate, {
    nullable: true
  })
  _avg!: MovementAvgAggregate | null;

  @TypeGraphQL.Field(_type => MovementSumAggregate, {
    nullable: true
  })
  _sum!: MovementSumAggregate | null;

  @TypeGraphQL.Field(_type => MovementMinAggregate, {
    nullable: true
  })
  _min!: MovementMinAggregate | null;

  @TypeGraphQL.Field(_type => MovementMaxAggregate, {
    nullable: true
  })
  _max!: MovementMaxAggregate | null;
}
