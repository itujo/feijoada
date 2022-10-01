import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CityCreateManyStateInput } from "../inputs/CityCreateManyStateInput";

@TypeGraphQL.InputType("CityCreateManyStateInputEnvelope", {
  isAbstract: true
})
export class CityCreateManyStateInputEnvelope {
  @TypeGraphQL.Field(_type => [CityCreateManyStateInput], {
    nullable: false
  })
  data!: CityCreateManyStateInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
