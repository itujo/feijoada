import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovementCreateManyPostingUnitInput } from "../inputs/MovementCreateManyPostingUnitInput";

@TypeGraphQL.InputType("MovementCreateManyPostingUnitInputEnvelope", {
  isAbstract: true
})
export class MovementCreateManyPostingUnitInputEnvelope {
  @TypeGraphQL.Field(_type => [MovementCreateManyPostingUnitInput], {
    nullable: false
  })
  data!: MovementCreateManyPostingUnitInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
