import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { FileListRelationFilter } from "../inputs/FileListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { MovementListRelationFilter } from "../inputs/MovementListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("CompanyWhereInput", {
  isAbstract: true
})
export class CompanyWhereInput {
  @TypeGraphQL.Field(_type => [CompanyWhereInput], {
    nullable: true
  })
  AND?: CompanyWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CompanyWhereInput], {
    nullable: true
  })
  OR?: CompanyWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CompanyWhereInput], {
    nullable: true
  })
  NOT?: CompanyWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  cnpj?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  clientCode?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  contractNumber?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  contractDr?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => FileListRelationFilter, {
    nullable: true
  })
  files?: FileListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MovementListRelationFilter, {
    nullable: true
  })
  movements?: MovementListRelationFilter | undefined;
}
