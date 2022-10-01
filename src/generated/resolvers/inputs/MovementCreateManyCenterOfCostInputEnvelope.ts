import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovementCreateManyCenterOfCostInput } from "../inputs/MovementCreateManyCenterOfCostInput";

@TypeGraphQL.InputType("MovementCreateManyCenterOfCostInputEnvelope", {
  isAbstract: true
})
export class MovementCreateManyCenterOfCostInputEnvelope {
  @TypeGraphQL.Field(_type => [MovementCreateManyCenterOfCostInput], {
    nullable: false
  })
  data!: MovementCreateManyCenterOfCostInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
