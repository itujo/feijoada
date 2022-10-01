import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovementCreateManyPostalCardInput } from "../inputs/MovementCreateManyPostalCardInput";

@TypeGraphQL.InputType("MovementCreateManyPostalCardInputEnvelope", {
  isAbstract: true
})
export class MovementCreateManyPostalCardInputEnvelope {
  @TypeGraphQL.Field(_type => [MovementCreateManyPostalCardInput], {
    nullable: false
  })
  data!: MovementCreateManyPostalCardInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
