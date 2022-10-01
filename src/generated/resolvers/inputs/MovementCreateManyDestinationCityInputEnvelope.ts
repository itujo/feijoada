import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovementCreateManyDestinationCityInput } from "../inputs/MovementCreateManyDestinationCityInput";

@TypeGraphQL.InputType("MovementCreateManyDestinationCityInputEnvelope", {
  isAbstract: true
})
export class MovementCreateManyDestinationCityInputEnvelope {
  @TypeGraphQL.Field(_type => [MovementCreateManyDestinationCityInput], {
    nullable: false
  })
  data!: MovementCreateManyDestinationCityInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
