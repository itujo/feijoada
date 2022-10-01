import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FileCreateManyCompanyInput } from "../inputs/FileCreateManyCompanyInput";

@TypeGraphQL.InputType("FileCreateManyCompanyInputEnvelope", {
  isAbstract: true
})
export class FileCreateManyCompanyInputEnvelope {
  @TypeGraphQL.Field(_type => [FileCreateManyCompanyInput], {
    nullable: false
  })
  data!: FileCreateManyCompanyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
