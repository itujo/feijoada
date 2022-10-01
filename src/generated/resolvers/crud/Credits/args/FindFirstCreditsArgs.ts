import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CreditsOrderByWithRelationInput } from "../../../inputs/CreditsOrderByWithRelationInput";
import { CreditsWhereInput } from "../../../inputs/CreditsWhereInput";
import { CreditsWhereUniqueInput } from "../../../inputs/CreditsWhereUniqueInput";
import { CreditsScalarFieldEnum } from "../../../../enums/CreditsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstCreditsArgs {
  @TypeGraphQL.Field(_type => CreditsWhereInput, {
    nullable: true
  })
  where?: CreditsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CreditsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: CreditsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => CreditsWhereUniqueInput, {
    nullable: true
  })
  cursor?: CreditsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [CreditsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "description" | "value" | "date" | "fileId" | "updatedAt" | "createdAt"> | undefined;
}
