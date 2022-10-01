import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ServiceCreateOrConnectWithoutMovementsInput } from "../inputs/ServiceCreateOrConnectWithoutMovementsInput";
import { ServiceCreateWithoutMovementsInput } from "../inputs/ServiceCreateWithoutMovementsInput";
import { ServiceUpdateWithoutMovementsInput } from "../inputs/ServiceUpdateWithoutMovementsInput";
import { ServiceUpsertWithoutMovementsInput } from "../inputs/ServiceUpsertWithoutMovementsInput";
import { ServiceWhereUniqueInput } from "../inputs/ServiceWhereUniqueInput";

@TypeGraphQL.InputType("ServiceUpdateOneRequiredWithoutMovementsNestedInput", {
  isAbstract: true
})
export class ServiceUpdateOneRequiredWithoutMovementsNestedInput {
  @TypeGraphQL.Field(_type => ServiceCreateWithoutMovementsInput, {
    nullable: true
  })
  create?: ServiceCreateWithoutMovementsInput | undefined;

  @TypeGraphQL.Field(_type => ServiceCreateOrConnectWithoutMovementsInput, {
    nullable: true
  })
  connectOrCreate?: ServiceCreateOrConnectWithoutMovementsInput | undefined;

  @TypeGraphQL.Field(_type => ServiceUpsertWithoutMovementsInput, {
    nullable: true
  })
  upsert?: ServiceUpsertWithoutMovementsInput | undefined;

  @TypeGraphQL.Field(_type => ServiceWhereUniqueInput, {
    nullable: true
  })
  connect?: ServiceWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ServiceUpdateWithoutMovementsInput, {
    nullable: true
  })
  update?: ServiceUpdateWithoutMovementsInput | undefined;
}
