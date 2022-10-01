import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ServiceCreateOrConnectWithoutMovementsInput } from "../inputs/ServiceCreateOrConnectWithoutMovementsInput";
import { ServiceCreateWithoutMovementsInput } from "../inputs/ServiceCreateWithoutMovementsInput";
import { ServiceWhereUniqueInput } from "../inputs/ServiceWhereUniqueInput";

@TypeGraphQL.InputType("ServiceCreateNestedOneWithoutMovementsInput", {
  isAbstract: true
})
export class ServiceCreateNestedOneWithoutMovementsInput {
  @TypeGraphQL.Field(_type => ServiceCreateWithoutMovementsInput, {
    nullable: true
  })
  create?: ServiceCreateWithoutMovementsInput | undefined;

  @TypeGraphQL.Field(_type => ServiceCreateOrConnectWithoutMovementsInput, {
    nullable: true
  })
  connectOrCreate?: ServiceCreateOrConnectWithoutMovementsInput | undefined;

  @TypeGraphQL.Field(_type => ServiceWhereUniqueInput, {
    nullable: true
  })
  connect?: ServiceWhereUniqueInput | undefined;
}
