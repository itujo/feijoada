import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovementCreateNestedManyWithoutPostingUnitInput } from "../inputs/MovementCreateNestedManyWithoutPostingUnitInput";

@TypeGraphQL.InputType("PostingUnitCreateInput", {
  isAbstract: true
})
export class PostingUnitCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => MovementCreateNestedManyWithoutPostingUnitInput, {
    nullable: true
  })
  movements?: MovementCreateNestedManyWithoutPostingUnitInput | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;
}
