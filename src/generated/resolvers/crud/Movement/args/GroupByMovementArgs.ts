import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovementOrderByWithAggregationInput } from "../../../inputs/MovementOrderByWithAggregationInput";
import { MovementScalarWhereWithAggregatesInput } from "../../../inputs/MovementScalarWhereWithAggregatesInput";
import { MovementWhereInput } from "../../../inputs/MovementWhereInput";
import { MovementScalarFieldEnum } from "../../../../enums/MovementScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMovementArgs {
  @TypeGraphQL.Field(_type => MovementWhereInput, {
    nullable: true
  })
  where?: MovementWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MovementOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: MovementOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovementScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "centerOfCostId" | "postalCardId" | "postingDate" | "serviceId" | "itemQty" | "weight" | "unitCost" | "serviceValue" | "documentNumber" | "label" | "declaredValue" | "discountValue" | "operationalDiscountCode" | "additionalServiceCode" | "postingUnitId" | "originCityId" | "destinationCityId" | "originPostalCode" | "destinationPostalCode" | "height" | "width" | "length" | "diameter" | "realWeight" | "fileId" | "updatedAt" | "createdAt">;

  @TypeGraphQL.Field(_type => MovementScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: MovementScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
