import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovementOrderByWithRelationInput } from "../../../inputs/MovementOrderByWithRelationInput";
import { MovementWhereInput } from "../../../inputs/MovementWhereInput";
import { MovementWhereUniqueInput } from "../../../inputs/MovementWhereUniqueInput";
import { MovementScalarFieldEnum } from "../../../../enums/MovementScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class CityMovementsOriginCityArgs {
  @TypeGraphQL.Field(_type => MovementWhereInput, {
    nullable: true
  })
  where?: MovementWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MovementOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: MovementOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => MovementWhereUniqueInput, {
    nullable: true
  })
  cursor?: MovementWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [MovementScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "centerOfCostId" | "postalCardId" | "postingDate" | "serviceId" | "itemQty" | "weight" | "unitCost" | "serviceValue" | "documentNumber" | "label" | "declaredValue" | "discountValue" | "operationalDiscountCode" | "additionalServiceCode" | "postingUnitId" | "originCityId" | "destinationCityId" | "originPostalCode" | "destinationPostalCode" | "height" | "width" | "length" | "diameter" | "realWeight" | "fileId" | "updatedAt" | "createdAt"> | undefined;
}
