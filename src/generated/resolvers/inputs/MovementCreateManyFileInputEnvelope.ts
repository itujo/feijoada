import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovementCreateManyFileInput } from "../inputs/MovementCreateManyFileInput";

@TypeGraphQL.InputType("MovementCreateManyFileInputEnvelope", {
  isAbstract: true
})
export class MovementCreateManyFileInputEnvelope {
  @TypeGraphQL.Field(_type => [MovementCreateManyFileInput], {
    nullable: false
  })
  data!: MovementCreateManyFileInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
