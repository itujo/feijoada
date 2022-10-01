import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovementCreateManyOriginCityInput } from "../inputs/MovementCreateManyOriginCityInput";

@TypeGraphQL.InputType("MovementCreateManyOriginCityInputEnvelope", {
  isAbstract: true
})
export class MovementCreateManyOriginCityInputEnvelope {
  @TypeGraphQL.Field(_type => [MovementCreateManyOriginCityInput], {
    nullable: false
  })
  data!: MovementCreateManyOriginCityInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
