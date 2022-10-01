import * as TypeGraphQL from "type-graphql";
import { City } from "../../../models/City";
import { State } from "../../../models/State";
import { StateCitiesArgs } from "./args/StateCitiesArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => State)
export class StateRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [City], {
    nullable: false
  })
  async cities(@TypeGraphQL.Root() state: State, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: StateCitiesArgs): Promise<City[]> {
    return getPrismaFromContext(ctx).state.findUnique({
      where: {
        id: state.id,
      },
    }).cities(args);
  }
}
