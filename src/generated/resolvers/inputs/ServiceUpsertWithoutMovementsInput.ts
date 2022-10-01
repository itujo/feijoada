import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ServiceCreateWithoutMovementsInput } from "../inputs/ServiceCreateWithoutMovementsInput";
import { ServiceUpdateWithoutMovementsInput } from "../inputs/ServiceUpdateWithoutMovementsInput";

@TypeGraphQL.InputType("ServiceUpsertWithoutMovementsInput", {
  isAbstract: true
})
export class ServiceUpsertWithoutMovementsInput {
  @TypeGraphQL.Field(_type => ServiceUpdateWithoutMovementsInput, {
    nullable: false
  })
  update!: ServiceUpdateWithoutMovementsInput;

  @TypeGraphQL.Field(_type => ServiceCreateWithoutMovementsInput, {
    nullable: false
  })
  create!: ServiceCreateWithoutMovementsInput;
}
