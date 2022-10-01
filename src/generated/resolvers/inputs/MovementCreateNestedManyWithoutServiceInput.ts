import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovementCreateManyServiceInputEnvelope } from "../inputs/MovementCreateManyServiceInputEnvelope";
import { MovementCreateOrConnectWithoutServiceInput } from "../inputs/MovementCreateOrConnectWithoutServiceInput";
import { MovementCreateWithoutServiceInput } from "../inputs/MovementCreateWithoutServiceInput";
import { MovementWhereUniqueInput } from "../inputs/MovementWhereUniqueInput";

@TypeGraphQL.InputType("MovementCreateNestedManyWithoutServiceInput", {
  isAbstract: true
})
export class MovementCreateNestedManyWithoutServiceInput {
  @TypeGraphQL.Field(_type => [MovementCreateWithoutServiceInput], {
    nullable: true
  })
  create?: MovementCreateWithoutServiceInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovementCreateOrConnectWithoutServiceInput], {
    nullable: true
  })
  connectOrCreate?: MovementCreateOrConnectWithoutServiceInput[] | undefined;

  @TypeGraphQL.Field(_type => MovementCreateManyServiceInputEnvelope, {
    nullable: true
  })
  createMany?: MovementCreateManyServiceInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MovementWhereUniqueInput], {
    nullable: true
  })
  connect?: MovementWhereUniqueInput[] | undefined;
}
