import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovementCreateManyFileInputEnvelope } from "../inputs/MovementCreateManyFileInputEnvelope";
import { MovementCreateOrConnectWithoutFileInput } from "../inputs/MovementCreateOrConnectWithoutFileInput";
import { MovementCreateWithoutFileInput } from "../inputs/MovementCreateWithoutFileInput";
import { MovementWhereUniqueInput } from "../inputs/MovementWhereUniqueInput";

@TypeGraphQL.InputType("MovementCreateNestedManyWithoutFileInput", {
  isAbstract: true
})
export class MovementCreateNestedManyWithoutFileInput {
  @TypeGraphQL.Field(_type => [MovementCreateWithoutFileInput], {
    nullable: true
  })
  create?: MovementCreateWithoutFileInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovementCreateOrConnectWithoutFileInput], {
    nullable: true
  })
  connectOrCreate?: MovementCreateOrConnectWithoutFileInput[] | undefined;

  @TypeGraphQL.Field(_type => MovementCreateManyFileInputEnvelope, {
    nullable: true
  })
  createMany?: MovementCreateManyFileInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MovementWhereUniqueInput], {
    nullable: true
  })
  connect?: MovementWhereUniqueInput[] | undefined;
}
