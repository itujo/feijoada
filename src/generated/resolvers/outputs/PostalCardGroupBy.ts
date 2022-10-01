import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostalCardAvgAggregate } from "../outputs/PostalCardAvgAggregate";
import { PostalCardCountAggregate } from "../outputs/PostalCardCountAggregate";
import { PostalCardMaxAggregate } from "../outputs/PostalCardMaxAggregate";
import { PostalCardMinAggregate } from "../outputs/PostalCardMinAggregate";
import { PostalCardSumAggregate } from "../outputs/PostalCardSumAggregate";

@TypeGraphQL.ObjectType("PostalCardGroupBy", {
  isAbstract: true
})
export class PostalCardGroupBy {
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

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => PostalCardCountAggregate, {
    nullable: true
  })
  _count!: PostalCardCountAggregate | null;

  @TypeGraphQL.Field(_type => PostalCardAvgAggregate, {
    nullable: true
  })
  _avg!: PostalCardAvgAggregate | null;

  @TypeGraphQL.Field(_type => PostalCardSumAggregate, {
    nullable: true
  })
  _sum!: PostalCardSumAggregate | null;

  @TypeGraphQL.Field(_type => PostalCardMinAggregate, {
    nullable: true
  })
  _min!: PostalCardMinAggregate | null;

  @TypeGraphQL.Field(_type => PostalCardMaxAggregate, {
    nullable: true
  })
  _max!: PostalCardMaxAggregate | null;
}
