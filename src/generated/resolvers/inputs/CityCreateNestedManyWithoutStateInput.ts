import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CityCreateManyStateInputEnvelope } from "../inputs/CityCreateManyStateInputEnvelope";
import { CityCreateOrConnectWithoutStateInput } from "../inputs/CityCreateOrConnectWithoutStateInput";
import { CityCreateWithoutStateInput } from "../inputs/CityCreateWithoutStateInput";
import { CityWhereUniqueInput } from "../inputs/CityWhereUniqueInput";

@TypeGraphQL.InputType("CityCreateNestedManyWithoutStateInput", {
  isAbstract: true
})
export class CityCreateNestedManyWithoutStateInput {
  @TypeGraphQL.Field(_type => [CityCreateWithoutStateInput], {
    nullable: true
  })
  create?: CityCreateWithoutStateInput[] | undefined;

  @TypeGraphQL.Field(_type => [CityCreateOrConnectWithoutStateInput], {
    nullable: true
  })
  connectOrCreate?: CityCreateOrConnectWithoutStateInput[] | undefined;

  @TypeGraphQL.Field(_type => CityCreateManyStateInputEnvelope, {
    nullable: true
  })
  createMany?: CityCreateManyStateInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CityWhereUniqueInput], {
    nullable: true
  })
  connect?: CityWhereUniqueInput[] | undefined;
}
