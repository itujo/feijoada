import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostingUnitAvgAggregate } from "../outputs/PostingUnitAvgAggregate";
import { PostingUnitCountAggregate } from "../outputs/PostingUnitCountAggregate";
import { PostingUnitMaxAggregate } from "../outputs/PostingUnitMaxAggregate";
import { PostingUnitMinAggregate } from "../outputs/PostingUnitMinAggregate";
import { PostingUnitSumAggregate } from "../outputs/PostingUnitSumAggregate";

@TypeGraphQL.ObjectType("PostingUnitGroupBy", {
  isAbstract: true
})
export class PostingUnitGroupBy {
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
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => PostingUnitCountAggregate, {
    nullable: true
  })
  _count!: PostingUnitCountAggregate | null;

  @TypeGraphQL.Field(_type => PostingUnitAvgAggregate, {
    nullable: true
  })
  _avg!: PostingUnitAvgAggregate | null;

  @TypeGraphQL.Field(_type => PostingUnitSumAggregate, {
    nullable: true
  })
  _sum!: PostingUnitSumAggregate | null;

  @TypeGraphQL.Field(_type => PostingUnitMinAggregate, {
    nullable: true
  })
  _min!: PostingUnitMinAggregate | null;

  @TypeGraphQL.Field(_type => PostingUnitMaxAggregate, {
    nullable: true
  })
  _max!: PostingUnitMaxAggregate | null;
}
