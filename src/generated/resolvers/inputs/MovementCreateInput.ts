import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CityCreateNestedOneWithoutDestinationOriginCityInput } from "../inputs/CityCreateNestedOneWithoutDestinationOriginCityInput";
import { CityCreateNestedOneWithoutMovementsOriginCityInput } from "../inputs/CityCreateNestedOneWithoutMovementsOriginCityInput";
import { CompanyCreateNestedOneWithoutMovementsInput } from "../inputs/CompanyCreateNestedOneWithoutMovementsInput";
import { FileCreateNestedOneWithoutMovementsInput } from "../inputs/FileCreateNestedOneWithoutMovementsInput";
import { PostalCardCreateNestedOneWithoutMovementsInput } from "../inputs/PostalCardCreateNestedOneWithoutMovementsInput";
import { PostingUnitCreateNestedOneWithoutMovementsInput } from "../inputs/PostingUnitCreateNestedOneWithoutMovementsInput";
import { ServiceCreateNestedOneWithoutMovementsInput } from "../inputs/ServiceCreateNestedOneWithoutMovementsInput";

@TypeGraphQL.InputType("MovementCreateInput", {
  isAbstract: true
})
export class MovementCreateInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  id?: bigint | undefined;

  @TypeGraphQL.Field(_type => CompanyCreateNestedOneWithoutMovementsInput, {
    nullable: false
  })
  centerOfCost!: CompanyCreateNestedOneWithoutMovementsInput;

  @TypeGraphQL.Field(_type => PostalCardCreateNestedOneWithoutMovementsInput, {
    nullable: false
  })
  postalCard!: PostalCardCreateNestedOneWithoutMovementsInput;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  postingDate!: Date;

  @TypeGraphQL.Field(_type => ServiceCreateNestedOneWithoutMovementsInput, {
    nullable: false
  })
  service!: ServiceCreateNestedOneWithoutMovementsInput;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  itemQty!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  weight!: number;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  unitCost!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  serviceValue!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  documentNumber!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  label!: string;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  declaredValue?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  discountValue!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  operationalDiscountCode!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  additionalServiceCode!: number;

  @TypeGraphQL.Field(_type => PostingUnitCreateNestedOneWithoutMovementsInput, {
    nullable: false
  })
  postingUnit!: PostingUnitCreateNestedOneWithoutMovementsInput;

  @TypeGraphQL.Field(_type => CityCreateNestedOneWithoutMovementsOriginCityInput, {
    nullable: true
  })
  originCity?: CityCreateNestedOneWithoutMovementsOriginCityInput | undefined;

  @TypeGraphQL.Field(_type => CityCreateNestedOneWithoutDestinationOriginCityInput, {
    nullable: true
  })
  destinationCity?: CityCreateNestedOneWithoutDestinationOriginCityInput | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  originPostalCode!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  destinationPostalCode!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  height!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  width!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  length!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  diameter!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  realWeight!: number;

  @TypeGraphQL.Field(_type => FileCreateNestedOneWithoutMovementsInput, {
    nullable: false
  })
  file!: FileCreateNestedOneWithoutMovementsInput;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;
}
