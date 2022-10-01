import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { CompanyUpdateOneRequiredWithoutFilesNestedInput } from "../inputs/CompanyUpdateOneRequiredWithoutFilesNestedInput";
import { CreditsUpdateManyWithoutFileNestedInput } from "../inputs/CreditsUpdateManyWithoutFileNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumFileTypesFieldUpdateOperationsInput } from "../inputs/EnumFileTypesFieldUpdateOperationsInput";
import { MovementUpdateManyWithoutFileNestedInput } from "../inputs/MovementUpdateManyWithoutFileNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("FileUpdateWithoutDebitsInput", {
  isAbstract: true
})
export class FileUpdateWithoutDebitsInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  date?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CreditsUpdateManyWithoutFileNestedInput, {
    nullable: true
  })
  credits?: CreditsUpdateManyWithoutFileNestedInput | undefined;

  @TypeGraphQL.Field(_type => MovementUpdateManyWithoutFileNestedInput, {
    nullable: true
  })
  movements?: MovementUpdateManyWithoutFileNestedInput | undefined;

  @TypeGraphQL.Field(_type => CompanyUpdateOneRequiredWithoutFilesNestedInput, {
    nullable: true
  })
  company?: CompanyUpdateOneRequiredWithoutFilesNestedInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  processed?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  movementsProcessed?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  creditsProcessed?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  debitsProcessed?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumFileTypesFieldUpdateOperationsInput, {
    nullable: true
  })
  fileType?: EnumFileTypesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
