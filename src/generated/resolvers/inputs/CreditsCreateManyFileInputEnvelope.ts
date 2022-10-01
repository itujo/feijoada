import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CreditsCreateManyFileInput } from "../inputs/CreditsCreateManyFileInput";

@TypeGraphQL.InputType("CreditsCreateManyFileInputEnvelope", {
  isAbstract: true
})
export class CreditsCreateManyFileInputEnvelope {
  @TypeGraphQL.Field(_type => [CreditsCreateManyFileInput], {
    nullable: false
  })
  data!: CreditsCreateManyFileInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
