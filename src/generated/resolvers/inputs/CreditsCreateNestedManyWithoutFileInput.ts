import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CreditsCreateManyFileInputEnvelope } from "../inputs/CreditsCreateManyFileInputEnvelope";
import { CreditsCreateOrConnectWithoutFileInput } from "../inputs/CreditsCreateOrConnectWithoutFileInput";
import { CreditsCreateWithoutFileInput } from "../inputs/CreditsCreateWithoutFileInput";
import { CreditsWhereUniqueInput } from "../inputs/CreditsWhereUniqueInput";

@TypeGraphQL.InputType("CreditsCreateNestedManyWithoutFileInput", {
  isAbstract: true
})
export class CreditsCreateNestedManyWithoutFileInput {
  @TypeGraphQL.Field(_type => [CreditsCreateWithoutFileInput], {
    nullable: true
  })
  create?: CreditsCreateWithoutFileInput[] | undefined;

  @TypeGraphQL.Field(_type => [CreditsCreateOrConnectWithoutFileInput], {
    nullable: true
  })
  connectOrCreate?: CreditsCreateOrConnectWithoutFileInput[] | undefined;

  @TypeGraphQL.Field(_type => CreditsCreateManyFileInputEnvelope, {
    nullable: true
  })
  createMany?: CreditsCreateManyFileInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CreditsWhereUniqueInput], {
    nullable: true
  })
  connect?: CreditsWhereUniqueInput[] | undefined;
}
