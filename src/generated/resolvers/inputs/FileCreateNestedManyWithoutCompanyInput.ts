import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FileCreateManyCompanyInputEnvelope } from "../inputs/FileCreateManyCompanyInputEnvelope";
import { FileCreateOrConnectWithoutCompanyInput } from "../inputs/FileCreateOrConnectWithoutCompanyInput";
import { FileCreateWithoutCompanyInput } from "../inputs/FileCreateWithoutCompanyInput";
import { FileWhereUniqueInput } from "../inputs/FileWhereUniqueInput";

@TypeGraphQL.InputType("FileCreateNestedManyWithoutCompanyInput", {
  isAbstract: true
})
export class FileCreateNestedManyWithoutCompanyInput {
  @TypeGraphQL.Field(_type => [FileCreateWithoutCompanyInput], {
    nullable: true
  })
  create?: FileCreateWithoutCompanyInput[] | undefined;

  @TypeGraphQL.Field(_type => [FileCreateOrConnectWithoutCompanyInput], {
    nullable: true
  })
  connectOrCreate?: FileCreateOrConnectWithoutCompanyInput[] | undefined;

  @TypeGraphQL.Field(_type => FileCreateManyCompanyInputEnvelope, {
    nullable: true
  })
  createMany?: FileCreateManyCompanyInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FileWhereUniqueInput], {
    nullable: true
  })
  connect?: FileWhereUniqueInput[] | undefined;
}
