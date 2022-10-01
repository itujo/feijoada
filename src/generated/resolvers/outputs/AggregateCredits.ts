import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CreditsAvgAggregate } from "../outputs/CreditsAvgAggregate";
import { CreditsCountAggregate } from "../outputs/CreditsCountAggregate";
import { CreditsMaxAggregate } from "../outputs/CreditsMaxAggregate";
import { CreditsMinAggregate } from "../outputs/CreditsMinAggregate";
import { CreditsSumAggregate } from "../outputs/CreditsSumAggregate";

@TypeGraphQL.ObjectType("AggregateCredits", {
  isAbstract: true
})
export class AggregateCredits {
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
