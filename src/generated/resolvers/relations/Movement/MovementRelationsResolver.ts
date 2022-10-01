import * as TypeGraphQL from "type-graphql";
import { City } from "../../../models/City";
import { Company } from "../../../models/Company";
import { File } from "../../../models/File";
import { Movement } from "../../../models/Movement";
import { PostalCard } from "../../../models/PostalCard";
import { PostingUnit } from "../../../models/PostingUnit";
import { Service } from "../../../models/Service";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Movement)
export class MovementRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Company, {
    nullable: false
  })
  async centerOfCost(@TypeGraphQL.Root() movement: Movement, @TypeGraphQL.Ctx() ctx: any): Promise<Company> {
    return getPrismaFromContext(ctx).movement.findUnique({
      where: {
        id: movement.id,
      },
    }).centerOfCost({});
  }

  @TypeGraphQL.FieldResolver(_type => PostalCard, {
    nullable: false
  })
  async postalCard(@TypeGraphQL.Root() movement: Movement, @TypeGraphQL.Ctx() ctx: any): Promise<PostalCard> {
    return getPrismaFromContext(ctx).movement.findUnique({
      where: {
        id: movement.id,
      },
    }).postalCard({});
  }

  @TypeGraphQL.FieldResolver(_type => Service, {
    nullable: false
  })
  async service(@TypeGraphQL.Root() movement: Movement, @TypeGraphQL.Ctx() ctx: any): Promise<Service> {
    return getPrismaFromContext(ctx).movement.findUnique({
      where: {
        id: movement.id,
      },
    }).service({});
  }

  @TypeGraphQL.FieldResolver(_type => PostingUnit, {
    nullable: false
  })
  async postingUnit(@TypeGraphQL.Root() movement: Movement, @TypeGraphQL.Ctx() ctx: any): Promise<PostingUnit> {
    return getPrismaFromContext(ctx).movement.findUnique({
      where: {
        id: movement.id,
      },
    }).postingUnit({});
  }

  @TypeGraphQL.FieldResolver(_type => City, {
    nullable: true
  })
  async originCity(@TypeGraphQL.Root() movement: Movement, @TypeGraphQL.Ctx() ctx: any): Promise<City | null> {
    return getPrismaFromContext(ctx).movement.findUnique({
      where: {
        id: movement.id,
      },
    }).originCity({});
  }

  @TypeGraphQL.FieldResolver(_type => City, {
    nullable: true
  })
  async destinationCity(@TypeGraphQL.Root() movement: Movement, @TypeGraphQL.Ctx() ctx: any): Promise<City | null> {
    return getPrismaFromContext(ctx).movement.findUnique({
      where: {
        id: movement.id,
      },
    }).destinationCity({});
  }

  @TypeGraphQL.FieldResolver(_type => File, {
    nullable: false
  })
  async file(@TypeGraphQL.Root() movement: Movement, @TypeGraphQL.Ctx() ctx: any): Promise<File> {
    return getPrismaFromContext(ctx).movement.findUnique({
      where: {
        id: movement.id,
      },
    }).file({});
  }
}
