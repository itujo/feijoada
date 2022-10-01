import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ServiceUpdateInput } from "../../../inputs/ServiceUpdateInput";
import { ServiceWhereUniqueInput } from "../../../inputs/ServiceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneServiceArgs {
  @TypeGraphQL.Field(_type => ServiceUpdateInput, {
    nullable: false
  })
  data!: ServiceUpdateInput;

  @TypeGraphQL.Field(_type => ServiceWhereUniqueInput, {
    nullable: false
  })
  where!: ServiceWhereUniqueInput;
}
