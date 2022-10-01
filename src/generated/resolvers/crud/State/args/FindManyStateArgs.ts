import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StateOrderByWithRelationInput } from "../../../inputs/StateOrderByWithRelationInput";
import { StateWhereInput } from "../../../inputs/StateWhereInput";
import { StateWhereUniqueInput } from "../../../inputs/StateWhereUniqueInput";
import { StateScalarFieldEnum } from "../../../../enums/StateScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyStateArgs {
  @TypeGraphQL.Field(_type => StateWhereInput, {
    nullable: true
  })
  where?: StateWhereInput | undefined;

  @TypeGraphQL.Field(_type => [StateOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: StateOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => StateWhereUniqueInput, {
    nullable: true
  })
  cursor?: StateWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [StateScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "updatedAt" | "createdAt"> | undefined;
}
