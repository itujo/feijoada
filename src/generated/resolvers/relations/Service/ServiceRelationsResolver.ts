import * as TypeGraphQL from "type-graphql";
import { Movement } from "../../../models/Movement";
import { Service } from "../../../models/Service";
import { ServiceMovementsArgs } from "./args/ServiceMovementsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Service)
export class ServiceRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Movement], {
    nullable: false
  })
  async movements(@TypeGraphQL.Root() service: Service, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ServiceMovementsArgs): Promise<Movement[]> {
    return getPrismaFromContext(ctx).service.findUnique({
      where: {
        id: service.id,
      },
    }).movements(args);
  }
}
