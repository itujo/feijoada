import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovementCreateManyServiceInput } from "../inputs/MovementCreateManyServiceInput";

@TypeGraphQL.InputType("MovementCreateManyServiceInputEnvelope", {
  isAbstract: true
})
export class MovementCreateManyServiceInputEnvelope {
  @TypeGraphQL.Field(_type => [MovementCreateManyServiceInput], {
    nullable: false
  })
  data!: MovementCreateManyServiceInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
