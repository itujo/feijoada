import * as TypeGraphQL from "type-graphql";
import { City } from "../../../models/City";
import { Movement } from "../../../models/Movement";
import { State } from "../../../models/State";
import { CityDestinationOriginCityArgs } from "./args/CityDestinationOriginCityArgs";
import { CityMovementsOriginCityArgs } from "./args/CityMovementsOriginCityArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => City)
export class CityRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => State, {
    nullable: true
  })
  async state(@TypeGraphQL.Root() city: City, @TypeGraphQL.Ctx() ctx: any): Promise<State | null> {
    return getPrismaFromContext(ctx).city.findUnique({
      where: {
        id: city.id,
      },
    }).state({});
  }

  @TypeGraphQL.FieldResolver(_type => [Movement], {
    nullable: false
  })
  async movementsOriginCity(@TypeGraphQL.Root() city: City, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CityMovementsOriginCityArgs): Promise<Movement[]> {
    return getPrismaFromContext(ctx).city.findUnique({
      where: {
        id: city.id,
      },
    }).movementsOriginCity(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Movement], {
    nullable: false
  })
  async destinationOriginCity(@TypeGraphQL.Root() city: City, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CityDestinationOriginCityArgs): Promise<Movement[]> {
    return getPrismaFromContext(ctx).city.findUnique({
      where: {
        id: city.id,
      },
    }).destinationOriginCity(args);
  }
}
