import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovementCreateManyDestinationCityInputEnvelope } from "../inputs/MovementCreateManyDestinationCityInputEnvelope";
import { MovementCreateOrConnectWithoutDestinationCityInput } from "../inputs/MovementCreateOrConnectWithoutDestinationCityInput";
import { MovementCreateWithoutDestinationCityInput } from "../inputs/MovementCreateWithoutDestinationCityInput";
import { MovementWhereUniqueInput } from "../inputs/MovementWhereUniqueInput";

@TypeGraphQL.InputType("MovementCreateNestedManyWithoutDestinationCityInput", {
  isAbstract: true
})
export class MovementCreateNestedManyWithoutDestinationCityInput {
  @TypeGraphQL.Field(_type => [MovementCreateWithoutDestinationCityInput], {
    nullable: true
  })
  create?: MovementCreateWithoutDestinationCityInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovementCreateOrConnectWithoutDestinationCityInput], {
    nullable: true
  })
  connectOrCreate?: MovementCreateOrConnectWithoutDestinationCityInput[] | undefined;

  @TypeGraphQL.Field(_type => MovementCreateManyDestinationCityInputEnvelope, {
    nullable: true
  })
  createMany?: MovementCreateManyDestinationCityInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MovementWhereUniqueInput], {
    nullable: true
  })
  connect?: MovementWhereUniqueInput[] | undefined;
}
