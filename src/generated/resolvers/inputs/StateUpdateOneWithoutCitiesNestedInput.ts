import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StateCreateOrConnectWithoutCitiesInput } from "../inputs/StateCreateOrConnectWithoutCitiesInput";
import { StateCreateWithoutCitiesInput } from "../inputs/StateCreateWithoutCitiesInput";
import { StateUpdateWithoutCitiesInput } from "../inputs/StateUpdateWithoutCitiesInput";
import { StateUpsertWithoutCitiesInput } from "../inputs/StateUpsertWithoutCitiesInput";
import { StateWhereUniqueInput } from "../inputs/StateWhereUniqueInput";

@TypeGraphQL.InputType("StateUpdateOneWithoutCitiesNestedInput", {
  isAbstract: true
})
export class StateUpdateOneWithoutCitiesNestedInput {
  @TypeGraphQL.Field(_type => StateCreateWithoutCitiesInput, {
    nullable: true
  })
  create?: StateCreateWithoutCitiesInput | undefined;

  @TypeGraphQL.Field(_type => StateCreateOrConnectWithoutCitiesInput, {
    nullable: true
  })
  connectOrCreate?: StateCreateOrConnectWithoutCitiesInput | undefined;

  @TypeGraphQL.Field(_type => StateUpsertWithoutCitiesInput, {
    nullable: true
  })
  upsert?: StateUpsertWithoutCitiesInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => StateWhereUniqueInput, {
    nullable: true
  })
  connect?: StateWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => StateUpdateWithoutCitiesInput, {
    nullable: true
  })
  update?: StateUpdateWithoutCitiesInput | undefined;
}
