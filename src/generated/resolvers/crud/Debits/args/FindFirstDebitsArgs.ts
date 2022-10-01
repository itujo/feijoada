import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DebitsOrderByWithRelationInput } from "../../../inputs/DebitsOrderByWithRelationInput";
import { DebitsWhereInput } from "../../../inputs/DebitsWhereInput";
import { DebitsWhereUniqueInput } from "../../../inputs/DebitsWhereUniqueInput";
import { DebitsScalarFieldEnum } from "../../../../enums/DebitsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstDebitsArgs {
  @TypeGraphQL.Field(_type => DebitsWhereInput, {
    nullable: true
  })
  where?: DebitsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [DebitsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: DebitsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => DebitsWhereUniqueInput, {
    nullable: true
  })
  cursor?: DebitsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [DebitsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "description" | "value" | "date" | "fileId" | "updatedAt" | "createdAt"> | undefined;
}
