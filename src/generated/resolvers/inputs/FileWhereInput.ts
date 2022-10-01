import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { CompanyRelationFilter } from "../inputs/CompanyRelationFilter";
import { CreditsListRelationFilter } from "../inputs/CreditsListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DebitsListRelationFilter } from "../inputs/DebitsListRelationFilter";
import { EnumFileTypesFilter } from "../inputs/EnumFileTypesFilter";
import { IntFilter } from "../inputs/IntFilter";
import { MovementListRelationFilter } from "../inputs/MovementListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("FileWhereInput", {
  isAbstract: true
})
export class FileWhereInput {
  @TypeGraphQL.Field(_type => [FileWhereInput], {
    nullable: true
  })
  AND?: FileWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FileWhereInput], {
    nullable: true
  })
  OR?: FileWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FileWhereInput], {
    nullable: true
  })
  NOT?: FileWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  date?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DebitsListRelationFilter, {
    nullable: true
  })
  debits?: DebitsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CreditsListRelationFilter, {
    nullable: true
  })
  credits?: CreditsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MovementListRelationFilter, {
    nullable: true
  })
  movements?: MovementListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CompanyRelationFilter, {
    nullable: true
  })
  company?: CompanyRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  companyId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  processed?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  movementsProcessed?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  creditsProcessed?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  debitsProcessed?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => EnumFileTypesFilter, {
    nullable: true
  })
  fileType?: EnumFileTypesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;
}
