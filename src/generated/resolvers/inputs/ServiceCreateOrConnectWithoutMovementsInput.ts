import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ServiceCreateWithoutMovementsInput } from "../inputs/ServiceCreateWithoutMovementsInput";
import { ServiceWhereUniqueInput } from "../inputs/ServiceWhereUniqueInput";

@TypeGraphQL.InputType("ServiceCreateOrConnectWithoutMovementsInput", {
  isAbstract: true
})
export class ServiceCreateOrConnectWithoutMovementsInput {
  @TypeGraphQL.Field(_type => ServiceWhereUniqueInput, {
    nullable: false
  })
  where!: ServiceWhereUniqueInput;

  @TypeGraphQL.Field(_type => ServiceCreateWithoutMovementsInput, {
    nullable: false
  })
  create!: ServiceCreateWithoutMovementsInput;
}
