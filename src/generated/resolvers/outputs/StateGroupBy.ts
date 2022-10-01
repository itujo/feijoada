import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StateAvgAggregate } from "../outputs/StateAvgAggregate";
import { StateCountAggregate } from "../outputs/StateCountAggregate";
import { StateMaxAggregate } from "../outputs/StateMaxAggregate";
import { StateMinAggregate } from "../outputs/StateMinAggregate";
import { StateSumAggregate } from "../outputs/StateSumAggregate";

@TypeGraphQL.ObjectType("StateGroupBy", {
  isAbstract: true
})
export class StateGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => StateCountAggregate, {
    nullable: true
  })
  _count!: StateCountAggregate | null;

  @TypeGraphQL.Field(_type => StateAvgAggregate, {
    nullable: true
  })
  _avg!: StateAvgAggregate | null;

  @TypeGraphQL.Field(_type => StateSumAggregate, {
    nullable: true
  })
  _sum!: StateSumAggregate | null;

  @TypeGraphQL.Field(_type => StateMinAggregate, {
    nullable: true
  })
  _min!: StateMinAggregate | null;

  @TypeGraphQL.Field(_type => StateMaxAggregate, {
    nullable: true
  })
  _max!: StateMaxAggregate | null;
}
