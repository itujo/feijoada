import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostalCardOrderByWithRelationInput } from "../../../inputs/PostalCardOrderByWithRelationInput";
import { PostalCardWhereInput } from "../../../inputs/PostalCardWhereInput";
import { PostalCardWhereUniqueInput } from "../../../inputs/PostalCardWhereUniqueInput";
import { PostalCardScalarFieldEnum } from "../../../../enums/PostalCardScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstPostalCardArgs {
  @TypeGraphQL.Field(_type => PostalCardWhereInput, {
    nullable: true
  })
  where?: PostalCardWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PostalCardOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PostalCardOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PostalCardWhereUniqueInput, {
    nullable: true
  })
  cursor?: PostalCardWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [PostalCardScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "number" | "owner" | "updatedAt" | "createdAt"> | undefined;
}
