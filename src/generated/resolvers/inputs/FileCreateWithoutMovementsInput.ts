import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CompanyCreateNestedOneWithoutFilesInput } from "../inputs/CompanyCreateNestedOneWithoutFilesInput";
import { CreditsCreateNestedManyWithoutFileInput } from "../inputs/CreditsCreateNestedManyWithoutFileInput";
import { DebitsCreateNestedManyWithoutReceiptInput } from "../inputs/DebitsCreateNestedManyWithoutReceiptInput";
import { FileTypes } from "../../enums/FileTypes";

@TypeGraphQL.InputType("FileCreateWithoutMovementsInput", {
  isAbstract: true
})
export class FileCreateWithoutMovementsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  date!: Date;

  @TypeGraphQL.Field(_type => DebitsCreateNestedManyWithoutReceiptInput, {
    nullable: true
  })
  debits?: DebitsCreateNestedManyWithoutReceiptInput | undefined;

  @TypeGraphQL.Field(_type => CreditsCreateNestedManyWithoutFileInput, {
    nullable: true
  })
  credits?: CreditsCreateNestedManyWithoutFileInput | undefined;

  @TypeGraphQL.Field(_type => CompanyCreateNestedOneWithoutFilesInput, {
    nullable: false
  })
  company!: CompanyCreateNestedOneWithoutFilesInput;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  processed?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  movementsProcessed?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  creditsProcessed?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  debitsProcessed?: boolean | undefined;

  @TypeGraphQL.Field(_type => FileTypes, {
    nullable: false
  })
  fileType!: "NATIONAL" | "INTERNATIONAL";

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;
}
