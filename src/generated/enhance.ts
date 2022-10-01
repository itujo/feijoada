import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

const crudResolversMap = {
  Company: crudResolvers.CompanyCrudResolver,
  File: crudResolvers.FileCrudResolver,
  Credits: crudResolvers.CreditsCrudResolver,
  Debits: crudResolvers.DebitsCrudResolver,
  PostalCard: crudResolvers.PostalCardCrudResolver,
  Service: crudResolvers.ServiceCrudResolver,
  PostingUnit: crudResolvers.PostingUnitCrudResolver,
  Movement: crudResolvers.MovementCrudResolver,
  State: crudResolvers.StateCrudResolver,
  City: crudResolvers.CityCrudResolver,
  User: crudResolvers.UserCrudResolver
};
const actionResolversMap = {
  Company: {
    aggregateCompany: actionResolvers.AggregateCompanyResolver,
    createManyCompany: actionResolvers.CreateManyCompanyResolver,
    createOneCompany: actionResolvers.CreateOneCompanyResolver,
    deleteManyCompany: actionResolvers.DeleteManyCompanyResolver,
    deleteOneCompany: actionResolvers.DeleteOneCompanyResolver,
    findFirstCompany: actionResolvers.FindFirstCompanyResolver,
    companies: actionResolvers.FindManyCompanyResolver,
    company: actionResolvers.FindUniqueCompanyResolver,
    groupByCompany: actionResolvers.GroupByCompanyResolver,
    updateManyCompany: actionResolvers.UpdateManyCompanyResolver,
    updateOneCompany: actionResolvers.UpdateOneCompanyResolver,
    upsertOneCompany: actionResolvers.UpsertOneCompanyResolver
  },
  File: {
    aggregateFile: actionResolvers.AggregateFileResolver,
    createManyFile: actionResolvers.CreateManyFileResolver,
    createOneFile: actionResolvers.CreateOneFileResolver,
    deleteManyFile: actionResolvers.DeleteManyFileResolver,
    deleteOneFile: actionResolvers.DeleteOneFileResolver,
    findFirstFile: actionResolvers.FindFirstFileResolver,
    files: actionResolvers.FindManyFileResolver,
    file: actionResolvers.FindUniqueFileResolver,
    groupByFile: actionResolvers.GroupByFileResolver,
    updateManyFile: actionResolvers.UpdateManyFileResolver,
    updateOneFile: actionResolvers.UpdateOneFileResolver,
    upsertOneFile: actionResolvers.UpsertOneFileResolver
  },
  Credits: {
    aggregateCredits: actionResolvers.AggregateCreditsResolver,
    createManyCredits: actionResolvers.CreateManyCreditsResolver,
    createOneCredits: actionResolvers.CreateOneCreditsResolver,
    deleteManyCredits: actionResolvers.DeleteManyCreditsResolver,
    deleteOneCredits: actionResolvers.DeleteOneCreditsResolver,
    findFirstCredits: actionResolvers.FindFirstCreditsResolver,
    findManyCredits: actionResolvers.FindManyCreditsResolver,
    findUniqueCredits: actionResolvers.FindUniqueCreditsResolver,
    groupByCredits: actionResolvers.GroupByCreditsResolver,
    updateManyCredits: actionResolvers.UpdateManyCreditsResolver,
    updateOneCredits: actionResolvers.UpdateOneCreditsResolver,
    upsertOneCredits: actionResolvers.UpsertOneCreditsResolver
  },
  Debits: {
    aggregateDebits: actionResolvers.AggregateDebitsResolver,
    createManyDebits: actionResolvers.CreateManyDebitsResolver,
    createOneDebits: actionResolvers.CreateOneDebitsResolver,
    deleteManyDebits: actionResolvers.DeleteManyDebitsResolver,
    deleteOneDebits: actionResolvers.DeleteOneDebitsResolver,
    findFirstDebits: actionResolvers.FindFirstDebitsResolver,
    findManyDebits: actionResolvers.FindManyDebitsResolver,
    findUniqueDebits: actionResolvers.FindUniqueDebitsResolver,
    groupByDebits: actionResolvers.GroupByDebitsResolver,
    updateManyDebits: actionResolvers.UpdateManyDebitsResolver,
    updateOneDebits: actionResolvers.UpdateOneDebitsResolver,
    upsertOneDebits: actionResolvers.UpsertOneDebitsResolver
  },
  PostalCard: {
    aggregatePostalCard: actionResolvers.AggregatePostalCardResolver,
    createManyPostalCard: actionResolvers.CreateManyPostalCardResolver,
    createOnePostalCard: actionResolvers.CreateOnePostalCardResolver,
    deleteManyPostalCard: actionResolvers.DeleteManyPostalCardResolver,
    deleteOnePostalCard: actionResolvers.DeleteOnePostalCardResolver,
    findFirstPostalCard: actionResolvers.FindFirstPostalCardResolver,
    postalCards: actionResolvers.FindManyPostalCardResolver,
    postalCard: actionResolvers.FindUniquePostalCardResolver,
    groupByPostalCard: actionResolvers.GroupByPostalCardResolver,
    updateManyPostalCard: actionResolvers.UpdateManyPostalCardResolver,
    updateOnePostalCard: actionResolvers.UpdateOnePostalCardResolver,
    upsertOnePostalCard: actionResolvers.UpsertOnePostalCardResolver
  },
  Service: {
    aggregateService: actionResolvers.AggregateServiceResolver,
    createManyService: actionResolvers.CreateManyServiceResolver,
    createOneService: actionResolvers.CreateOneServiceResolver,
    deleteManyService: actionResolvers.DeleteManyServiceResolver,
    deleteOneService: actionResolvers.DeleteOneServiceResolver,
    findFirstService: actionResolvers.FindFirstServiceResolver,
    services: actionResolvers.FindManyServiceResolver,
    service: actionResolvers.FindUniqueServiceResolver,
    groupByService: actionResolvers.GroupByServiceResolver,
    updateManyService: actionResolvers.UpdateManyServiceResolver,
    updateOneService: actionResolvers.UpdateOneServiceResolver,
    upsertOneService: actionResolvers.UpsertOneServiceResolver
  },
  PostingUnit: {
    aggregatePostingUnit: actionResolvers.AggregatePostingUnitResolver,
    createManyPostingUnit: actionResolvers.CreateManyPostingUnitResolver,
    createOnePostingUnit: actionResolvers.CreateOnePostingUnitResolver,
    deleteManyPostingUnit: actionResolvers.DeleteManyPostingUnitResolver,
    deleteOnePostingUnit: actionResolvers.DeleteOnePostingUnitResolver,
    findFirstPostingUnit: actionResolvers.FindFirstPostingUnitResolver,
    postingUnits: actionResolvers.FindManyPostingUnitResolver,
    postingUnit: actionResolvers.FindUniquePostingUnitResolver,
    groupByPostingUnit: actionResolvers.GroupByPostingUnitResolver,
    updateManyPostingUnit: actionResolvers.UpdateManyPostingUnitResolver,
    updateOnePostingUnit: actionResolvers.UpdateOnePostingUnitResolver,
    upsertOnePostingUnit: actionResolvers.UpsertOnePostingUnitResolver
  },
  Movement: {
    aggregateMovement: actionResolvers.AggregateMovementResolver,
    createManyMovement: actionResolvers.CreateManyMovementResolver,
    createOneMovement: actionResolvers.CreateOneMovementResolver,
    deleteManyMovement: actionResolvers.DeleteManyMovementResolver,
    deleteOneMovement: actionResolvers.DeleteOneMovementResolver,
    findFirstMovement: actionResolvers.FindFirstMovementResolver,
    movements: actionResolvers.FindManyMovementResolver,
    movement: actionResolvers.FindUniqueMovementResolver,
    groupByMovement: actionResolvers.GroupByMovementResolver,
    updateManyMovement: actionResolvers.UpdateManyMovementResolver,
    updateOneMovement: actionResolvers.UpdateOneMovementResolver,
    upsertOneMovement: actionResolvers.UpsertOneMovementResolver
  },
  State: {
    aggregateState: actionResolvers.AggregateStateResolver,
    createManyState: actionResolvers.CreateManyStateResolver,
    createOneState: actionResolvers.CreateOneStateResolver,
    deleteManyState: actionResolvers.DeleteManyStateResolver,
    deleteOneState: actionResolvers.DeleteOneStateResolver,
    findFirstState: actionResolvers.FindFirstStateResolver,
    states: actionResolvers.FindManyStateResolver,
    state: actionResolvers.FindUniqueStateResolver,
    groupByState: actionResolvers.GroupByStateResolver,
    updateManyState: actionResolvers.UpdateManyStateResolver,
    updateOneState: actionResolvers.UpdateOneStateResolver,
    upsertOneState: actionResolvers.UpsertOneStateResolver
  },
  City: {
    aggregateCity: actionResolvers.AggregateCityResolver,
    createManyCity: actionResolvers.CreateManyCityResolver,
    createOneCity: actionResolvers.CreateOneCityResolver,
    deleteManyCity: actionResolvers.DeleteManyCityResolver,
    deleteOneCity: actionResolvers.DeleteOneCityResolver,
    findFirstCity: actionResolvers.FindFirstCityResolver,
    cities: actionResolvers.FindManyCityResolver,
    city: actionResolvers.FindUniqueCityResolver,
    groupByCity: actionResolvers.GroupByCityResolver,
    updateManyCity: actionResolvers.UpdateManyCityResolver,
    updateOneCity: actionResolvers.UpdateOneCityResolver,
    upsertOneCity: actionResolvers.UpsertOneCityResolver
  },
  User: {
    aggregateUser: actionResolvers.AggregateUserResolver,
    createManyUser: actionResolvers.CreateManyUserResolver,
    createOneUser: actionResolvers.CreateOneUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    deleteOneUser: actionResolvers.DeleteOneUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    users: actionResolvers.FindManyUserResolver,
    user: actionResolvers.FindUniqueUserResolver,
    groupByUser: actionResolvers.GroupByUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    updateOneUser: actionResolvers.UpdateOneUserResolver,
    upsertOneUser: actionResolvers.UpsertOneUserResolver
  }
};
const crudResolversInfo = {
  Company: ["aggregateCompany", "createManyCompany", "createOneCompany", "deleteManyCompany", "deleteOneCompany", "findFirstCompany", "companies", "company", "groupByCompany", "updateManyCompany", "updateOneCompany", "upsertOneCompany"],
  File: ["aggregateFile", "createManyFile", "createOneFile", "deleteManyFile", "deleteOneFile", "findFirstFile", "files", "file", "groupByFile", "updateManyFile", "updateOneFile", "upsertOneFile"],
  Credits: ["aggregateCredits", "createManyCredits", "createOneCredits", "deleteManyCredits", "deleteOneCredits", "findFirstCredits", "findManyCredits", "findUniqueCredits", "groupByCredits", "updateManyCredits", "updateOneCredits", "upsertOneCredits"],
  Debits: ["aggregateDebits", "createManyDebits", "createOneDebits", "deleteManyDebits", "deleteOneDebits", "findFirstDebits", "findManyDebits", "findUniqueDebits", "groupByDebits", "updateManyDebits", "updateOneDebits", "upsertOneDebits"],
  PostalCard: ["aggregatePostalCard", "createManyPostalCard", "createOnePostalCard", "deleteManyPostalCard", "deleteOnePostalCard", "findFirstPostalCard", "postalCards", "postalCard", "groupByPostalCard", "updateManyPostalCard", "updateOnePostalCard", "upsertOnePostalCard"],
  Service: ["aggregateService", "createManyService", "createOneService", "deleteManyService", "deleteOneService", "findFirstService", "services", "service", "groupByService", "updateManyService", "updateOneService", "upsertOneService"],
  PostingUnit: ["aggregatePostingUnit", "createManyPostingUnit", "createOnePostingUnit", "deleteManyPostingUnit", "deleteOnePostingUnit", "findFirstPostingUnit", "postingUnits", "postingUnit", "groupByPostingUnit", "updateManyPostingUnit", "updateOnePostingUnit", "upsertOnePostingUnit"],
  Movement: ["aggregateMovement", "createManyMovement", "createOneMovement", "deleteManyMovement", "deleteOneMovement", "findFirstMovement", "movements", "movement", "groupByMovement", "updateManyMovement", "updateOneMovement", "upsertOneMovement"],
  State: ["aggregateState", "createManyState", "createOneState", "deleteManyState", "deleteOneState", "findFirstState", "states", "state", "groupByState", "updateManyState", "updateOneState", "upsertOneState"],
  City: ["aggregateCity", "createManyCity", "createOneCity", "deleteManyCity", "deleteOneCity", "findFirstCity", "cities", "city", "groupByCity", "updateManyCity", "updateOneCity", "upsertOneCity"],
  User: ["aggregateUser", "createManyUser", "createOneUser", "deleteManyUser", "deleteOneUser", "findFirstUser", "users", "user", "groupByUser", "updateManyUser", "updateOneUser", "upsertOneUser"]
};
const argsInfo = {
  AggregateCompanyArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyCompanyArgs: ["data", "skipDuplicates"],
  CreateOneCompanyArgs: ["data"],
  DeleteManyCompanyArgs: ["where"],
  DeleteOneCompanyArgs: ["where"],
  FindFirstCompanyArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyCompanyArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueCompanyArgs: ["where"],
  GroupByCompanyArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyCompanyArgs: ["data", "where"],
  UpdateOneCompanyArgs: ["data", "where"],
  UpsertOneCompanyArgs: ["where", "create", "update"],
  AggregateFileArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyFileArgs: ["data", "skipDuplicates"],
  CreateOneFileArgs: ["data"],
  DeleteManyFileArgs: ["where"],
  DeleteOneFileArgs: ["where"],
  FindFirstFileArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyFileArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueFileArgs: ["where"],
  GroupByFileArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyFileArgs: ["data", "where"],
  UpdateOneFileArgs: ["data", "where"],
  UpsertOneFileArgs: ["where", "create", "update"],
  AggregateCreditsArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyCreditsArgs: ["data", "skipDuplicates"],
  CreateOneCreditsArgs: ["data"],
  DeleteManyCreditsArgs: ["where"],
  DeleteOneCreditsArgs: ["where"],
  FindFirstCreditsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyCreditsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueCreditsArgs: ["where"],
  GroupByCreditsArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyCreditsArgs: ["data", "where"],
  UpdateOneCreditsArgs: ["data", "where"],
  UpsertOneCreditsArgs: ["where", "create", "update"],
  AggregateDebitsArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyDebitsArgs: ["data", "skipDuplicates"],
  CreateOneDebitsArgs: ["data"],
  DeleteManyDebitsArgs: ["where"],
  DeleteOneDebitsArgs: ["where"],
  FindFirstDebitsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyDebitsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueDebitsArgs: ["where"],
  GroupByDebitsArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyDebitsArgs: ["data", "where"],
  UpdateOneDebitsArgs: ["data", "where"],
  UpsertOneDebitsArgs: ["where", "create", "update"],
  AggregatePostalCardArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyPostalCardArgs: ["data", "skipDuplicates"],
  CreateOnePostalCardArgs: ["data"],
  DeleteManyPostalCardArgs: ["where"],
  DeleteOnePostalCardArgs: ["where"],
  FindFirstPostalCardArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPostalCardArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniquePostalCardArgs: ["where"],
  GroupByPostalCardArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyPostalCardArgs: ["data", "where"],
  UpdateOnePostalCardArgs: ["data", "where"],
  UpsertOnePostalCardArgs: ["where", "create", "update"],
  AggregateServiceArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyServiceArgs: ["data", "skipDuplicates"],
  CreateOneServiceArgs: ["data"],
  DeleteManyServiceArgs: ["where"],
  DeleteOneServiceArgs: ["where"],
  FindFirstServiceArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyServiceArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueServiceArgs: ["where"],
  GroupByServiceArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyServiceArgs: ["data", "where"],
  UpdateOneServiceArgs: ["data", "where"],
  UpsertOneServiceArgs: ["where", "create", "update"],
  AggregatePostingUnitArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyPostingUnitArgs: ["data", "skipDuplicates"],
  CreateOnePostingUnitArgs: ["data"],
  DeleteManyPostingUnitArgs: ["where"],
  DeleteOnePostingUnitArgs: ["where"],
  FindFirstPostingUnitArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPostingUnitArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniquePostingUnitArgs: ["where"],
  GroupByPostingUnitArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyPostingUnitArgs: ["data", "where"],
  UpdateOnePostingUnitArgs: ["data", "where"],
  UpsertOnePostingUnitArgs: ["where", "create", "update"],
  AggregateMovementArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyMovementArgs: ["data", "skipDuplicates"],
  CreateOneMovementArgs: ["data"],
  DeleteManyMovementArgs: ["where"],
  DeleteOneMovementArgs: ["where"],
  FindFirstMovementArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyMovementArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueMovementArgs: ["where"],
  GroupByMovementArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyMovementArgs: ["data", "where"],
  UpdateOneMovementArgs: ["data", "where"],
  UpsertOneMovementArgs: ["where", "create", "update"],
  AggregateStateArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyStateArgs: ["data", "skipDuplicates"],
  CreateOneStateArgs: ["data"],
  DeleteManyStateArgs: ["where"],
  DeleteOneStateArgs: ["where"],
  FindFirstStateArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyStateArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueStateArgs: ["where"],
  GroupByStateArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyStateArgs: ["data", "where"],
  UpdateOneStateArgs: ["data", "where"],
  UpsertOneStateArgs: ["where", "create", "update"],
  AggregateCityArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyCityArgs: ["data", "skipDuplicates"],
  CreateOneCityArgs: ["data"],
  DeleteManyCityArgs: ["where"],
  DeleteOneCityArgs: ["where"],
  FindFirstCityArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyCityArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueCityArgs: ["where"],
  GroupByCityArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyCityArgs: ["data", "where"],
  UpdateOneCityArgs: ["data", "where"],
  UpsertOneCityArgs: ["where", "create", "update"],
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyUserArgs: ["data", "skipDuplicates"],
  CreateOneUserArgs: ["data"],
  DeleteManyUserArgs: ["where"],
  DeleteOneUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueUserArgs: ["where"],
  GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyUserArgs: ["data", "where"],
  UpdateOneUserArgs: ["data", "where"],
  UpsertOneUserArgs: ["where", "create", "update"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
  > = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
  > = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
        tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
  > = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  Company: relationResolvers.CompanyRelationsResolver,
  File: relationResolvers.FileRelationsResolver,
  Credits: relationResolvers.CreditsRelationsResolver,
  Debits: relationResolvers.DebitsRelationsResolver,
  PostalCard: relationResolvers.PostalCardRelationsResolver,
  Service: relationResolvers.ServiceRelationsResolver,
  PostingUnit: relationResolvers.PostingUnitRelationsResolver,
  Movement: relationResolvers.MovementRelationsResolver,
  State: relationResolvers.StateRelationsResolver,
  City: relationResolvers.CityRelationsResolver
};
const relationResolversInfo = {
  Company: ["files", "movements"],
  File: ["debits", "credits", "movements", "company"],
  Credits: ["file"],
  Debits: ["receipt"],
  PostalCard: ["movements"],
  Service: ["movements"],
  PostingUnit: ["movements"],
  Movement: ["centerOfCost", "postalCard", "service", "postingUnit", "originCity", "destinationCity", "file"],
  State: ["cities"],
  City: ["state", "movementsOriginCity", "destinationOriginCity"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
  > = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  Company: ["id", "cnpj", "name", "clientCode", "contractNumber", "contractDr", "updatedAt", "createdAt"],
  File: ["id", "name", "date", "companyId", "processed", "movementsProcessed", "creditsProcessed", "debitsProcessed", "fileType", "updatedAt", "createdAt"],
  Credits: ["id", "description", "value", "date", "fileId", "updatedAt", "createdAt"],
  Debits: ["id", "description", "value", "date", "fileId", "updatedAt", "createdAt"],
  PostalCard: ["id", "number", "owner", "updatedAt", "createdAt"],
  Service: ["id", "name", "code", "updatedAt", "createdAt"],
  PostingUnit: ["id", "name", "updatedAt", "createdAt"],
  Movement: ["id", "centerOfCostId", "postalCardId", "postingDate", "serviceId", "itemQty", "weight", "unitCost", "serviceValue", "documentNumber", "label", "declaredValue", "discountValue", "operationalDiscountCode", "additionalServiceCode", "postingUnitId", "originCityId", "destinationCityId", "originPostalCode", "destinationPostalCode", "height", "width", "length", "diameter", "realWeight", "fileId", "updatedAt", "createdAt"],
  State: ["id", "name", "updatedAt", "createdAt"],
  City: ["id", "name", "stateId", "updatedAt", "createdAt"],
  User: ["id", "name", "username", "email", "role", "permissions", "updatedAt", "createdAt"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateCompany: ["_count", "_avg", "_sum", "_min", "_max"],
  CompanyGroupBy: ["id", "cnpj", "name", "clientCode", "contractNumber", "contractDr", "updatedAt", "createdAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateFile: ["_count", "_avg", "_sum", "_min", "_max"],
  FileGroupBy: ["id", "name", "date", "companyId", "processed", "movementsProcessed", "creditsProcessed", "debitsProcessed", "fileType", "updatedAt", "createdAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateCredits: ["_count", "_avg", "_sum", "_min", "_max"],
  CreditsGroupBy: ["id", "description", "value", "date", "fileId", "updatedAt", "createdAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateDebits: ["_count", "_avg", "_sum", "_min", "_max"],
  DebitsGroupBy: ["id", "description", "value", "date", "fileId", "updatedAt", "createdAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregatePostalCard: ["_count", "_avg", "_sum", "_min", "_max"],
  PostalCardGroupBy: ["id", "number", "owner", "updatedAt", "createdAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateService: ["_count", "_avg", "_sum", "_min", "_max"],
  ServiceGroupBy: ["id", "name", "code", "updatedAt", "createdAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregatePostingUnit: ["_count", "_avg", "_sum", "_min", "_max"],
  PostingUnitGroupBy: ["id", "name", "updatedAt", "createdAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateMovement: ["_count", "_avg", "_sum", "_min", "_max"],
  MovementGroupBy: ["id", "centerOfCostId", "postalCardId", "postingDate", "serviceId", "itemQty", "weight", "unitCost", "serviceValue", "documentNumber", "label", "declaredValue", "discountValue", "operationalDiscountCode", "additionalServiceCode", "postingUnitId", "originCityId", "destinationCityId", "originPostalCode", "destinationPostalCode", "height", "width", "length", "diameter", "realWeight", "fileId", "updatedAt", "createdAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateState: ["_count", "_avg", "_sum", "_min", "_max"],
  StateGroupBy: ["id", "name", "updatedAt", "createdAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateCity: ["_count", "_avg", "_sum", "_min", "_max"],
  CityGroupBy: ["id", "name", "stateId", "updatedAt", "createdAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateUser: ["_count", "_avg", "_sum", "_min", "_max"],
  UserGroupBy: ["id", "name", "username", "email", "role", "permissions", "password", "updatedAt", "createdAt", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  CompanyCount: ["files", "movements"],
  CompanyCountAggregate: ["id", "cnpj", "name", "clientCode", "contractNumber", "contractDr", "updatedAt", "createdAt", "_all"],
  CompanyAvgAggregate: ["id"],
  CompanySumAggregate: ["id"],
  CompanyMinAggregate: ["id", "cnpj", "name", "clientCode", "contractNumber", "contractDr", "updatedAt", "createdAt"],
  CompanyMaxAggregate: ["id", "cnpj", "name", "clientCode", "contractNumber", "contractDr", "updatedAt", "createdAt"],
  FileCount: ["debits", "credits", "movements"],
  FileCountAggregate: ["id", "name", "date", "companyId", "processed", "movementsProcessed", "creditsProcessed", "debitsProcessed", "fileType", "updatedAt", "createdAt", "_all"],
  FileAvgAggregate: ["id", "companyId"],
  FileSumAggregate: ["id", "companyId"],
  FileMinAggregate: ["id", "name", "date", "companyId", "processed", "movementsProcessed", "creditsProcessed", "debitsProcessed", "fileType", "updatedAt", "createdAt"],
  FileMaxAggregate: ["id", "name", "date", "companyId", "processed", "movementsProcessed", "creditsProcessed", "debitsProcessed", "fileType", "updatedAt", "createdAt"],
  CreditsCountAggregate: ["id", "description", "value", "date", "fileId", "updatedAt", "createdAt", "_all"],
  CreditsAvgAggregate: ["id", "value", "fileId"],
  CreditsSumAggregate: ["id", "value", "fileId"],
  CreditsMinAggregate: ["id", "description", "value", "date", "fileId", "updatedAt", "createdAt"],
  CreditsMaxAggregate: ["id", "description", "value", "date", "fileId", "updatedAt", "createdAt"],
  DebitsCountAggregate: ["id", "description", "value", "date", "fileId", "updatedAt", "createdAt", "_all"],
  DebitsAvgAggregate: ["id", "value", "fileId"],
  DebitsSumAggregate: ["id", "value", "fileId"],
  DebitsMinAggregate: ["id", "description", "value", "date", "fileId", "updatedAt", "createdAt"],
  DebitsMaxAggregate: ["id", "description", "value", "date", "fileId", "updatedAt", "createdAt"],
  PostalCardCount: ["movements"],
  PostalCardCountAggregate: ["id", "number", "owner", "updatedAt", "createdAt", "_all"],
  PostalCardAvgAggregate: ["id"],
  PostalCardSumAggregate: ["id"],
  PostalCardMinAggregate: ["id", "number", "owner", "updatedAt", "createdAt"],
  PostalCardMaxAggregate: ["id", "number", "owner", "updatedAt", "createdAt"],
  ServiceCount: ["movements"],
  ServiceCountAggregate: ["id", "name", "code", "updatedAt", "createdAt", "_all"],
  ServiceAvgAggregate: ["id", "code"],
  ServiceSumAggregate: ["id", "code"],
  ServiceMinAggregate: ["id", "name", "code", "updatedAt", "createdAt"],
  ServiceMaxAggregate: ["id", "name", "code", "updatedAt", "createdAt"],
  PostingUnitCount: ["movements"],
  PostingUnitCountAggregate: ["id", "name", "updatedAt", "createdAt", "_all"],
  PostingUnitAvgAggregate: ["id"],
  PostingUnitSumAggregate: ["id"],
  PostingUnitMinAggregate: ["id", "name", "updatedAt", "createdAt"],
  PostingUnitMaxAggregate: ["id", "name", "updatedAt", "createdAt"],
  MovementCountAggregate: ["id", "centerOfCostId", "postalCardId", "postingDate", "serviceId", "itemQty", "weight", "unitCost", "serviceValue", "documentNumber", "label", "declaredValue", "discountValue", "operationalDiscountCode", "additionalServiceCode", "postingUnitId", "originCityId", "destinationCityId", "originPostalCode", "destinationPostalCode", "height", "width", "length", "diameter", "realWeight", "fileId", "updatedAt", "createdAt", "_all"],
  MovementAvgAggregate: ["id", "centerOfCostId", "postalCardId", "serviceId", "itemQty", "weight", "unitCost", "serviceValue", "declaredValue", "discountValue", "operationalDiscountCode", "additionalServiceCode", "postingUnitId", "originCityId", "destinationCityId", "height", "width", "length", "diameter", "realWeight", "fileId"],
  MovementSumAggregate: ["id", "centerOfCostId", "postalCardId", "serviceId", "itemQty", "weight", "unitCost", "serviceValue", "declaredValue", "discountValue", "operationalDiscountCode", "additionalServiceCode", "postingUnitId", "originCityId", "destinationCityId", "height", "width", "length", "diameter", "realWeight", "fileId"],
  MovementMinAggregate: ["id", "centerOfCostId", "postalCardId", "postingDate", "serviceId", "itemQty", "weight", "unitCost", "serviceValue", "documentNumber", "label", "declaredValue", "discountValue", "operationalDiscountCode", "additionalServiceCode", "postingUnitId", "originCityId", "destinationCityId", "originPostalCode", "destinationPostalCode", "height", "width", "length", "diameter", "realWeight", "fileId", "updatedAt", "createdAt"],
  MovementMaxAggregate: ["id", "centerOfCostId", "postalCardId", "postingDate", "serviceId", "itemQty", "weight", "unitCost", "serviceValue", "documentNumber", "label", "declaredValue", "discountValue", "operationalDiscountCode", "additionalServiceCode", "postingUnitId", "originCityId", "destinationCityId", "originPostalCode", "destinationPostalCode", "height", "width", "length", "diameter", "realWeight", "fileId", "updatedAt", "createdAt"],
  StateCount: ["cities"],
  StateCountAggregate: ["id", "name", "updatedAt", "createdAt", "_all"],
  StateAvgAggregate: ["id"],
  StateSumAggregate: ["id"],
  StateMinAggregate: ["id", "name", "updatedAt", "createdAt"],
  StateMaxAggregate: ["id", "name", "updatedAt", "createdAt"],
  CityCount: ["movementsOriginCity", "destinationOriginCity"],
  CityCountAggregate: ["id", "name", "stateId", "updatedAt", "createdAt", "_all"],
  CityAvgAggregate: ["id", "stateId"],
  CitySumAggregate: ["id", "stateId"],
  CityMinAggregate: ["id", "name", "stateId", "updatedAt", "createdAt"],
  CityMaxAggregate: ["id", "name", "stateId", "updatedAt", "createdAt"],
  UserCountAggregate: ["id", "name", "username", "email", "role", "permissions", "password", "updatedAt", "createdAt", "_all"],
  UserAvgAggregate: ["id"],
  UserSumAggregate: ["id"],
  UserMinAggregate: ["id", "name", "username", "email", "role", "password", "updatedAt", "createdAt"],
  UserMaxAggregate: ["id", "name", "username", "email", "role", "password", "updatedAt", "createdAt"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
  > = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  CompanyWhereInput: ["AND", "OR", "NOT", "id", "cnpj", "name", "clientCode", "contractNumber", "contractDr", "updatedAt", "createdAt", "files", "movements"],
  CompanyOrderByWithRelationInput: ["id", "cnpj", "name", "clientCode", "contractNumber", "contractDr", "updatedAt", "createdAt", "files", "movements"],
  CompanyWhereUniqueInput: ["id", "cnpj", "clientCode", "contractNumber"],
  CompanyOrderByWithAggregationInput: ["id", "cnpj", "name", "clientCode", "contractNumber", "contractDr", "updatedAt", "createdAt", "_count", "_avg", "_max", "_min", "_sum"],
  CompanyScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "cnpj", "name", "clientCode", "contractNumber", "contractDr", "updatedAt", "createdAt"],
  FileWhereInput: ["AND", "OR", "NOT", "id", "name", "date", "debits", "credits", "movements", "company", "companyId", "processed", "movementsProcessed", "creditsProcessed", "debitsProcessed", "fileType", "updatedAt", "createdAt"],
  FileOrderByWithRelationInput: ["id", "name", "date", "debits", "credits", "movements", "company", "companyId", "processed", "movementsProcessed", "creditsProcessed", "debitsProcessed", "fileType", "updatedAt", "createdAt"],
  FileWhereUniqueInput: ["id", "name"],
  FileOrderByWithAggregationInput: ["id", "name", "date", "companyId", "processed", "movementsProcessed", "creditsProcessed", "debitsProcessed", "fileType", "updatedAt", "createdAt", "_count", "_avg", "_max", "_min", "_sum"],
  FileScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "date", "companyId", "processed", "movementsProcessed", "creditsProcessed", "debitsProcessed", "fileType", "updatedAt", "createdAt"],
  CreditsWhereInput: ["AND", "OR", "NOT", "id", "description", "value", "date", "file", "fileId", "updatedAt", "createdAt"],
  CreditsOrderByWithRelationInput: ["id", "description", "value", "date", "file", "fileId", "updatedAt", "createdAt"],
  CreditsWhereUniqueInput: ["id"],
  CreditsOrderByWithAggregationInput: ["id", "description", "value", "date", "fileId", "updatedAt", "createdAt", "_count", "_avg", "_max", "_min", "_sum"],
  CreditsScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "description", "value", "date", "fileId", "updatedAt", "createdAt"],
  DebitsWhereInput: ["AND", "OR", "NOT", "id", "description", "value", "date", "receipt", "fileId", "updatedAt", "createdAt"],
  DebitsOrderByWithRelationInput: ["id", "description", "value", "date", "receipt", "fileId", "updatedAt", "createdAt"],
  DebitsWhereUniqueInput: ["id"],
  DebitsOrderByWithAggregationInput: ["id", "description", "value", "date", "fileId", "updatedAt", "createdAt", "_count", "_avg", "_max", "_min", "_sum"],
  DebitsScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "description", "value", "date", "fileId", "updatedAt", "createdAt"],
  PostalCardWhereInput: ["AND", "OR", "NOT", "id", "number", "owner", "movements", "updatedAt", "createdAt"],
  PostalCardOrderByWithRelationInput: ["id", "number", "owner", "movements", "updatedAt", "createdAt"],
  PostalCardWhereUniqueInput: ["id", "number"],
  PostalCardOrderByWithAggregationInput: ["id", "number", "owner", "updatedAt", "createdAt", "_count", "_avg", "_max", "_min", "_sum"],
  PostalCardScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "number", "owner", "updatedAt", "createdAt"],
  ServiceWhereInput: ["AND", "OR", "NOT", "id", "name", "code", "movements", "updatedAt", "createdAt"],
  ServiceOrderByWithRelationInput: ["id", "name", "code", "movements", "updatedAt", "createdAt"],
  ServiceWhereUniqueInput: ["id", "name", "code"],
  ServiceOrderByWithAggregationInput: ["id", "name", "code", "updatedAt", "createdAt", "_count", "_avg", "_max", "_min", "_sum"],
  ServiceScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "code", "updatedAt", "createdAt"],
  PostingUnitWhereInput: ["AND", "OR", "NOT", "id", "name", "movements", "updatedAt", "createdAt"],
  PostingUnitOrderByWithRelationInput: ["id", "name", "movements", "updatedAt", "createdAt"],
  PostingUnitWhereUniqueInput: ["id", "name"],
  PostingUnitOrderByWithAggregationInput: ["id", "name", "updatedAt", "createdAt", "_count", "_avg", "_max", "_min", "_sum"],
  PostingUnitScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "updatedAt", "createdAt"],
  MovementWhereInput: ["AND", "OR", "NOT", "id", "centerOfCost", "centerOfCostId", "postalCard", "postalCardId", "postingDate", "service", "serviceId", "itemQty", "weight", "unitCost", "serviceValue", "documentNumber", "label", "declaredValue", "discountValue", "operationalDiscountCode", "additionalServiceCode", "postingUnit", "postingUnitId", "originCity", "originCityId", "destinationCity", "destinationCityId", "originPostalCode", "destinationPostalCode", "height", "width", "length", "diameter", "realWeight", "file", "fileId", "updatedAt", "createdAt"],
  MovementOrderByWithRelationInput: ["id", "centerOfCost", "centerOfCostId", "postalCard", "postalCardId", "postingDate", "service", "serviceId", "itemQty", "weight", "unitCost", "serviceValue", "documentNumber", "label", "declaredValue", "discountValue", "operationalDiscountCode", "additionalServiceCode", "postingUnit", "postingUnitId", "originCity", "originCityId", "destinationCity", "destinationCityId", "originPostalCode", "destinationPostalCode", "height", "width", "length", "diameter", "realWeight", "file", "fileId", "updatedAt", "createdAt"],
  MovementWhereUniqueInput: ["id"],
  MovementOrderByWithAggregationInput: ["id", "centerOfCostId", "postalCardId", "postingDate", "serviceId", "itemQty", "weight", "unitCost", "serviceValue", "documentNumber", "label", "declaredValue", "discountValue", "operationalDiscountCode", "additionalServiceCode", "postingUnitId", "originCityId", "destinationCityId", "originPostalCode", "destinationPostalCode", "height", "width", "length", "diameter", "realWeight", "fileId", "updatedAt", "createdAt", "_count", "_avg", "_max", "_min", "_sum"],
  MovementScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "centerOfCostId", "postalCardId", "postingDate", "serviceId", "itemQty", "weight", "unitCost", "serviceValue", "documentNumber", "label", "declaredValue", "discountValue", "operationalDiscountCode", "additionalServiceCode", "postingUnitId", "originCityId", "destinationCityId", "originPostalCode", "destinationPostalCode", "height", "width", "length", "diameter", "realWeight", "fileId", "updatedAt", "createdAt"],
  StateWhereInput: ["AND", "OR", "NOT", "id", "name", "cities", "updatedAt", "createdAt"],
  StateOrderByWithRelationInput: ["id", "name", "cities", "updatedAt", "createdAt"],
  StateWhereUniqueInput: ["id", "name"],
  StateOrderByWithAggregationInput: ["id", "name", "updatedAt", "createdAt", "_count", "_avg", "_max", "_min", "_sum"],
  StateScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "updatedAt", "createdAt"],
  CityWhereInput: ["AND", "OR", "NOT", "id", "name", "state", "stateId", "movementsOriginCity", "destinationOriginCity", "updatedAt", "createdAt"],
  CityOrderByWithRelationInput: ["id", "name", "state", "stateId", "movementsOriginCity", "destinationOriginCity", "updatedAt", "createdAt"],
  CityWhereUniqueInput: ["id", "name"],
  CityOrderByWithAggregationInput: ["id", "name", "stateId", "updatedAt", "createdAt", "_count", "_avg", "_max", "_min", "_sum"],
  CityScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "stateId", "updatedAt", "createdAt"],
  UserWhereInput: ["AND", "OR", "NOT", "id", "name", "username", "email", "role", "permissions", "password", "updatedAt", "createdAt"],
  UserOrderByWithRelationInput: ["id", "name", "username", "email", "role", "permissions", "password", "updatedAt", "createdAt"],
  UserWhereUniqueInput: ["id", "username", "email"],
  UserOrderByWithAggregationInput: ["id", "name", "username", "email", "role", "permissions", "password", "updatedAt", "createdAt", "_count", "_avg", "_max", "_min", "_sum"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "username", "email", "role", "permissions", "password", "updatedAt", "createdAt"],
  CompanyCreateInput: ["cnpj", "name", "clientCode", "contractNumber", "contractDr", "updatedAt", "createdAt", "files", "movements"],
  CompanyUpdateInput: ["cnpj", "name", "clientCode", "contractNumber", "contractDr", "updatedAt", "createdAt", "files", "movements"],
  CompanyCreateManyInput: ["id", "cnpj", "name", "clientCode", "contractNumber", "contractDr", "updatedAt", "createdAt"],
  CompanyUpdateManyMutationInput: ["cnpj", "name", "clientCode", "contractNumber", "contractDr", "updatedAt", "createdAt"],
  FileCreateInput: ["name", "date", "debits", "credits", "movements", "company", "processed", "movementsProcessed", "creditsProcessed", "debitsProcessed", "fileType", "updatedAt", "createdAt"],
  FileUpdateInput: ["name", "date", "debits", "credits", "movements", "company", "processed", "movementsProcessed", "creditsProcessed", "debitsProcessed", "fileType", "updatedAt", "createdAt"],
  FileCreateManyInput: ["id", "name", "date", "companyId", "processed", "movementsProcessed", "creditsProcessed", "debitsProcessed", "fileType", "updatedAt", "createdAt"],
  FileUpdateManyMutationInput: ["name", "date", "processed", "movementsProcessed", "creditsProcessed", "debitsProcessed", "fileType", "updatedAt", "createdAt"],
  CreditsCreateInput: ["id", "description", "value", "date", "file", "updatedAt", "createdAt"],
  CreditsUpdateInput: ["id", "description", "value", "date", "file", "updatedAt", "createdAt"],
  CreditsCreateManyInput: ["id", "description", "value", "date", "fileId", "updatedAt", "createdAt"],
  CreditsUpdateManyMutationInput: ["id", "description", "value", "date", "updatedAt", "createdAt"],
  DebitsCreateInput: ["id", "description", "value", "date", "receipt", "updatedAt", "createdAt"],
  DebitsUpdateInput: ["id", "description", "value", "date", "receipt", "updatedAt", "createdAt"],
  DebitsCreateManyInput: ["id", "description", "value", "date", "fileId", "updatedAt", "createdAt"],
  DebitsUpdateManyMutationInput: ["id", "description", "value", "date", "updatedAt", "createdAt"],
  PostalCardCreateInput: ["number", "owner", "movements", "updatedAt", "createdAt"],
  PostalCardUpdateInput: ["number", "owner", "movements", "updatedAt", "createdAt"],
  PostalCardCreateManyInput: ["id", "number", "owner", "updatedAt", "createdAt"],
  PostalCardUpdateManyMutationInput: ["number", "owner", "updatedAt", "createdAt"],
  ServiceCreateInput: ["name", "code", "movements", "updatedAt", "createdAt"],
  ServiceUpdateInput: ["name", "code", "movements", "updatedAt", "createdAt"],
  ServiceCreateManyInput: ["id", "name", "code", "updatedAt", "createdAt"],
  ServiceUpdateManyMutationInput: ["name", "code", "updatedAt", "createdAt"],
  PostingUnitCreateInput: ["name", "movements", "updatedAt", "createdAt"],
  PostingUnitUpdateInput: ["name", "movements", "updatedAt", "createdAt"],
  PostingUnitCreateManyInput: ["id", "name", "updatedAt", "createdAt"],
  PostingUnitUpdateManyMutationInput: ["name", "updatedAt", "createdAt"],
  MovementCreateInput: ["id", "centerOfCost", "postalCard", "postingDate", "service", "itemQty", "weight", "unitCost", "serviceValue", "documentNumber", "label", "declaredValue", "discountValue", "operationalDiscountCode", "additionalServiceCode", "postingUnit", "originCity", "destinationCity", "originPostalCode", "destinationPostalCode", "height", "width", "length", "diameter", "realWeight", "file", "updatedAt", "createdAt"],
  MovementUpdateInput: ["id", "centerOfCost", "postalCard", "postingDate", "service", "itemQty", "weight", "unitCost", "serviceValue", "documentNumber", "label", "declaredValue", "discountValue", "operationalDiscountCode", "additionalServiceCode", "postingUnit", "originCity", "destinationCity", "originPostalCode", "destinationPostalCode", "height", "width", "length", "diameter", "realWeight", "file", "updatedAt", "createdAt"],
  MovementCreateManyInput: ["id", "centerOfCostId", "postalCardId", "postingDate", "serviceId", "itemQty", "weight", "unitCost", "serviceValue", "documentNumber", "label", "declaredValue", "discountValue", "operationalDiscountCode", "additionalServiceCode", "postingUnitId", "originCityId", "destinationCityId", "originPostalCode", "destinationPostalCode", "height", "width", "length", "diameter", "realWeight", "fileId", "updatedAt", "createdAt"],
  MovementUpdateManyMutationInput: ["id", "postingDate", "itemQty", "weight", "unitCost", "serviceValue", "documentNumber", "label", "declaredValue", "discountValue", "operationalDiscountCode", "additionalServiceCode", "originPostalCode", "destinationPostalCode", "height", "width", "length", "diameter", "realWeight", "updatedAt", "createdAt"],
  StateCreateInput: ["name", "cities", "updatedAt", "createdAt"],
  StateUpdateInput: ["name", "cities", "updatedAt", "createdAt"],
  StateCreateManyInput: ["id", "name", "updatedAt", "createdAt"],
  StateUpdateManyMutationInput: ["name", "updatedAt", "createdAt"],
  CityCreateInput: ["name", "state", "movementsOriginCity", "destinationOriginCity", "updatedAt", "createdAt"],
  CityUpdateInput: ["name", "state", "movementsOriginCity", "destinationOriginCity", "updatedAt", "createdAt"],
  CityCreateManyInput: ["id", "name", "stateId", "updatedAt", "createdAt"],
  CityUpdateManyMutationInput: ["name", "updatedAt", "createdAt"],
  UserCreateInput: ["name", "username", "email", "role", "permissions", "password", "updatedAt", "createdAt"],
  UserUpdateInput: ["name", "username", "email", "role", "permissions", "password", "updatedAt", "createdAt"],
  UserCreateManyInput: ["id", "name", "username", "email", "role", "permissions", "password", "updatedAt", "createdAt"],
  UserUpdateManyMutationInput: ["name", "username", "email", "role", "permissions", "password", "updatedAt", "createdAt"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  FileListRelationFilter: ["every", "some", "none"],
  MovementListRelationFilter: ["every", "some", "none"],
  FileOrderByRelationAggregateInput: ["_count"],
  MovementOrderByRelationAggregateInput: ["_count"],
  CompanyCountOrderByAggregateInput: ["id", "cnpj", "name", "clientCode", "contractNumber", "contractDr", "updatedAt", "createdAt"],
  CompanyAvgOrderByAggregateInput: ["id"],
  CompanyMaxOrderByAggregateInput: ["id", "cnpj", "name", "clientCode", "contractNumber", "contractDr", "updatedAt", "createdAt"],
  CompanyMinOrderByAggregateInput: ["id", "cnpj", "name", "clientCode", "contractNumber", "contractDr", "updatedAt", "createdAt"],
  CompanySumOrderByAggregateInput: ["id"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  DebitsListRelationFilter: ["every", "some", "none"],
  CreditsListRelationFilter: ["every", "some", "none"],
  CompanyRelationFilter: ["is", "isNot"],
  BoolFilter: ["equals", "not"],
  EnumFileTypesFilter: ["equals", "in", "notIn", "not"],
  DebitsOrderByRelationAggregateInput: ["_count"],
  CreditsOrderByRelationAggregateInput: ["_count"],
  FileCountOrderByAggregateInput: ["id", "name", "date", "companyId", "processed", "movementsProcessed", "creditsProcessed", "debitsProcessed", "fileType", "updatedAt", "createdAt"],
  FileAvgOrderByAggregateInput: ["id", "companyId"],
  FileMaxOrderByAggregateInput: ["id", "name", "date", "companyId", "processed", "movementsProcessed", "creditsProcessed", "debitsProcessed", "fileType", "updatedAt", "createdAt"],
  FileMinOrderByAggregateInput: ["id", "name", "date", "companyId", "processed", "movementsProcessed", "creditsProcessed", "debitsProcessed", "fileType", "updatedAt", "createdAt"],
  FileSumOrderByAggregateInput: ["id", "companyId"],
  BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  EnumFileTypesWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  BigIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  DecimalFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  DateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  FileRelationFilter: ["is", "isNot"],
  CreditsCountOrderByAggregateInput: ["id", "description", "value", "date", "fileId", "updatedAt", "createdAt"],
  CreditsAvgOrderByAggregateInput: ["id", "value", "fileId"],
  CreditsMaxOrderByAggregateInput: ["id", "description", "value", "date", "fileId", "updatedAt", "createdAt"],
  CreditsMinOrderByAggregateInput: ["id", "description", "value", "date", "fileId", "updatedAt", "createdAt"],
  CreditsSumOrderByAggregateInput: ["id", "value", "fileId"],
  BigIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  DecimalWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  DateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  DebitsCountOrderByAggregateInput: ["id", "description", "value", "date", "fileId", "updatedAt", "createdAt"],
  DebitsAvgOrderByAggregateInput: ["id", "value", "fileId"],
  DebitsMaxOrderByAggregateInput: ["id", "description", "value", "date", "fileId", "updatedAt", "createdAt"],
  DebitsMinOrderByAggregateInput: ["id", "description", "value", "date", "fileId", "updatedAt", "createdAt"],
  DebitsSumOrderByAggregateInput: ["id", "value", "fileId"],
  PostalCardCountOrderByAggregateInput: ["id", "number", "owner", "updatedAt", "createdAt"],
  PostalCardAvgOrderByAggregateInput: ["id"],
  PostalCardMaxOrderByAggregateInput: ["id", "number", "owner", "updatedAt", "createdAt"],
  PostalCardMinOrderByAggregateInput: ["id", "number", "owner", "updatedAt", "createdAt"],
  PostalCardSumOrderByAggregateInput: ["id"],
  ServiceCountOrderByAggregateInput: ["id", "name", "code", "updatedAt", "createdAt"],
  ServiceAvgOrderByAggregateInput: ["id", "code"],
  ServiceMaxOrderByAggregateInput: ["id", "name", "code", "updatedAt", "createdAt"],
  ServiceMinOrderByAggregateInput: ["id", "name", "code", "updatedAt", "createdAt"],
  ServiceSumOrderByAggregateInput: ["id", "code"],
  PostingUnitCountOrderByAggregateInput: ["id", "name", "updatedAt", "createdAt"],
  PostingUnitAvgOrderByAggregateInput: ["id"],
  PostingUnitMaxOrderByAggregateInput: ["id", "name", "updatedAt", "createdAt"],
  PostingUnitMinOrderByAggregateInput: ["id", "name", "updatedAt", "createdAt"],
  PostingUnitSumOrderByAggregateInput: ["id"],
  PostalCardRelationFilter: ["is", "isNot"],
  ServiceRelationFilter: ["is", "isNot"],
  DecimalNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  PostingUnitRelationFilter: ["is", "isNot"],
  CityRelationFilter: ["is", "isNot"],
  IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  MovementCountOrderByAggregateInput: ["id", "centerOfCostId", "postalCardId", "postingDate", "serviceId", "itemQty", "weight", "unitCost", "serviceValue", "documentNumber", "label", "declaredValue", "discountValue", "operationalDiscountCode", "additionalServiceCode", "postingUnitId", "originCityId", "destinationCityId", "originPostalCode", "destinationPostalCode", "height", "width", "length", "diameter", "realWeight", "fileId", "updatedAt", "createdAt"],
  MovementAvgOrderByAggregateInput: ["id", "centerOfCostId", "postalCardId", "serviceId", "itemQty", "weight", "unitCost", "serviceValue", "declaredValue", "discountValue", "operationalDiscountCode", "additionalServiceCode", "postingUnitId", "originCityId", "destinationCityId", "height", "width", "length", "diameter", "realWeight", "fileId"],
  MovementMaxOrderByAggregateInput: ["id", "centerOfCostId", "postalCardId", "postingDate", "serviceId", "itemQty", "weight", "unitCost", "serviceValue", "documentNumber", "label", "declaredValue", "discountValue", "operationalDiscountCode", "additionalServiceCode", "postingUnitId", "originCityId", "destinationCityId", "originPostalCode", "destinationPostalCode", "height", "width", "length", "diameter", "realWeight", "fileId", "updatedAt", "createdAt"],
  MovementMinOrderByAggregateInput: ["id", "centerOfCostId", "postalCardId", "postingDate", "serviceId", "itemQty", "weight", "unitCost", "serviceValue", "documentNumber", "label", "declaredValue", "discountValue", "operationalDiscountCode", "additionalServiceCode", "postingUnitId", "originCityId", "destinationCityId", "originPostalCode", "destinationPostalCode", "height", "width", "length", "diameter", "realWeight", "fileId", "updatedAt", "createdAt"],
  MovementSumOrderByAggregateInput: ["id", "centerOfCostId", "postalCardId", "serviceId", "itemQty", "weight", "unitCost", "serviceValue", "declaredValue", "discountValue", "operationalDiscountCode", "additionalServiceCode", "postingUnitId", "originCityId", "destinationCityId", "height", "width", "length", "diameter", "realWeight", "fileId"],
  DecimalNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  CityListRelationFilter: ["every", "some", "none"],
  CityOrderByRelationAggregateInput: ["_count"],
  StateCountOrderByAggregateInput: ["id", "name", "updatedAt", "createdAt"],
  StateAvgOrderByAggregateInput: ["id"],
  StateMaxOrderByAggregateInput: ["id", "name", "updatedAt", "createdAt"],
  StateMinOrderByAggregateInput: ["id", "name", "updatedAt", "createdAt"],
  StateSumOrderByAggregateInput: ["id"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  StateRelationFilter: ["is", "isNot"],
  CityCountOrderByAggregateInput: ["id", "name", "stateId", "updatedAt", "createdAt"],
  CityAvgOrderByAggregateInput: ["id", "stateId"],
  CityMaxOrderByAggregateInput: ["id", "name", "stateId", "updatedAt", "createdAt"],
  CityMinOrderByAggregateInput: ["id", "name", "stateId", "updatedAt", "createdAt"],
  CitySumOrderByAggregateInput: ["id", "stateId"],
  EnumRolesFilter: ["equals", "in", "notIn", "not"],
  EnumPermissionsNullableListFilter: ["equals", "has", "hasEvery", "hasSome", "isEmpty"],
  UserCountOrderByAggregateInput: ["id", "name", "username", "email", "role", "permissions", "password", "updatedAt", "createdAt"],
  UserAvgOrderByAggregateInput: ["id"],
  UserMaxOrderByAggregateInput: ["id", "name", "username", "email", "role", "password", "updatedAt", "createdAt"],
  UserMinOrderByAggregateInput: ["id", "name", "username", "email", "role", "password", "updatedAt", "createdAt"],
  UserSumOrderByAggregateInput: ["id"],
  EnumRolesWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  FileCreateNestedManyWithoutCompanyInput: ["create", "connectOrCreate", "createMany", "connect"],
  MovementCreateNestedManyWithoutCenterOfCostInput: ["create", "connectOrCreate", "createMany", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  FileUpdateManyWithoutCompanyNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  MovementUpdateManyWithoutCenterOfCostNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  DebitsCreateNestedManyWithoutReceiptInput: ["create", "connectOrCreate", "createMany", "connect"],
  CreditsCreateNestedManyWithoutFileInput: ["create", "connectOrCreate", "createMany", "connect"],
  MovementCreateNestedManyWithoutFileInput: ["create", "connectOrCreate", "createMany", "connect"],
  CompanyCreateNestedOneWithoutFilesInput: ["create", "connectOrCreate", "connect"],
  DebitsUpdateManyWithoutReceiptNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  CreditsUpdateManyWithoutFileNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  MovementUpdateManyWithoutFileNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  CompanyUpdateOneRequiredWithoutFilesNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  BoolFieldUpdateOperationsInput: ["set"],
  EnumFileTypesFieldUpdateOperationsInput: ["set"],
  FileCreateNestedOneWithoutCreditsInput: ["create", "connectOrCreate", "connect"],
  BigIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  DecimalFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  NullableDateTimeFieldUpdateOperationsInput: ["set"],
  FileUpdateOneRequiredWithoutCreditsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  FileCreateNestedOneWithoutDebitsInput: ["create", "connectOrCreate", "connect"],
  FileUpdateOneRequiredWithoutDebitsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  MovementCreateNestedManyWithoutPostalCardInput: ["create", "connectOrCreate", "createMany", "connect"],
  MovementUpdateManyWithoutPostalCardNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  MovementCreateNestedManyWithoutServiceInput: ["create", "connectOrCreate", "createMany", "connect"],
  MovementUpdateManyWithoutServiceNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  MovementCreateNestedManyWithoutPostingUnitInput: ["create", "connectOrCreate", "createMany", "connect"],
  MovementUpdateManyWithoutPostingUnitNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  CompanyCreateNestedOneWithoutMovementsInput: ["create", "connectOrCreate", "connect"],
  PostalCardCreateNestedOneWithoutMovementsInput: ["create", "connectOrCreate", "connect"],
  ServiceCreateNestedOneWithoutMovementsInput: ["create", "connectOrCreate", "connect"],
  PostingUnitCreateNestedOneWithoutMovementsInput: ["create", "connectOrCreate", "connect"],
  CityCreateNestedOneWithoutMovementsOriginCityInput: ["create", "connectOrCreate", "connect"],
  CityCreateNestedOneWithoutDestinationOriginCityInput: ["create", "connectOrCreate", "connect"],
  FileCreateNestedOneWithoutMovementsInput: ["create", "connectOrCreate", "connect"],
  CompanyUpdateOneRequiredWithoutMovementsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  PostalCardUpdateOneRequiredWithoutMovementsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  ServiceUpdateOneRequiredWithoutMovementsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  NullableDecimalFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  PostingUnitUpdateOneRequiredWithoutMovementsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  CityUpdateOneWithoutMovementsOriginCityNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  CityUpdateOneWithoutDestinationOriginCityNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  FileUpdateOneRequiredWithoutMovementsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  CityCreateNestedManyWithoutStateInput: ["create", "connectOrCreate", "createMany", "connect"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  CityUpdateManyWithoutStateNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  StateCreateNestedOneWithoutCitiesInput: ["create", "connectOrCreate", "connect"],
  MovementCreateNestedManyWithoutOriginCityInput: ["create", "connectOrCreate", "createMany", "connect"],
  MovementCreateNestedManyWithoutDestinationCityInput: ["create", "connectOrCreate", "createMany", "connect"],
  StateUpdateOneWithoutCitiesNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  MovementUpdateManyWithoutOriginCityNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  MovementUpdateManyWithoutDestinationCityNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserCreatepermissionsInput: ["set"],
  EnumRolesFieldUpdateOperationsInput: ["set"],
  UserUpdatepermissionsInput: ["set", "push"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedBoolFilter: ["equals", "not"],
  NestedEnumFileTypesFilter: ["equals", "in", "notIn", "not"],
  NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  NestedEnumFileTypesWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedBigIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDecimalFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedBigIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedDecimalWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedDateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDecimalNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDecimalNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedEnumRolesFilter: ["equals", "in", "notIn", "not"],
  NestedEnumRolesWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  FileCreateWithoutCompanyInput: ["name", "date", "debits", "credits", "movements", "processed", "movementsProcessed", "creditsProcessed", "debitsProcessed", "fileType", "updatedAt", "createdAt"],
  FileCreateOrConnectWithoutCompanyInput: ["where", "create"],
  FileCreateManyCompanyInputEnvelope: ["data", "skipDuplicates"],
  MovementCreateWithoutCenterOfCostInput: ["id", "postalCard", "postingDate", "service", "itemQty", "weight", "unitCost", "serviceValue", "documentNumber", "label", "declaredValue", "discountValue", "operationalDiscountCode", "additionalServiceCode", "postingUnit", "originCity", "destinationCity", "originPostalCode", "destinationPostalCode", "height", "width", "length", "diameter", "realWeight", "file", "updatedAt", "createdAt"],
  MovementCreateOrConnectWithoutCenterOfCostInput: ["where", "create"],
  MovementCreateManyCenterOfCostInputEnvelope: ["data", "skipDuplicates"],
  FileUpsertWithWhereUniqueWithoutCompanyInput: ["where", "update", "create"],
  FileUpdateWithWhereUniqueWithoutCompanyInput: ["where", "data"],
  FileUpdateManyWithWhereWithoutCompanyInput: ["where", "data"],
  FileScalarWhereInput: ["AND", "OR", "NOT", "id", "name", "date", "companyId", "processed", "movementsProcessed", "creditsProcessed", "debitsProcessed", "fileType", "updatedAt", "createdAt"],
  MovementUpsertWithWhereUniqueWithoutCenterOfCostInput: ["where", "update", "create"],
  MovementUpdateWithWhereUniqueWithoutCenterOfCostInput: ["where", "data"],
  MovementUpdateManyWithWhereWithoutCenterOfCostInput: ["where", "data"],
  MovementScalarWhereInput: ["AND", "OR", "NOT", "id", "centerOfCostId", "postalCardId", "postingDate", "serviceId", "itemQty", "weight", "unitCost", "serviceValue", "documentNumber", "label", "declaredValue", "discountValue", "operationalDiscountCode", "additionalServiceCode", "postingUnitId", "originCityId", "destinationCityId", "originPostalCode", "destinationPostalCode", "height", "width", "length", "diameter", "realWeight", "fileId", "updatedAt", "createdAt"],
  DebitsCreateWithoutReceiptInput: ["id", "description", "value", "date", "updatedAt", "createdAt"],
  DebitsCreateOrConnectWithoutReceiptInput: ["where", "create"],
  DebitsCreateManyReceiptInputEnvelope: ["data", "skipDuplicates"],
  CreditsCreateWithoutFileInput: ["id", "description", "value", "date", "updatedAt", "createdAt"],
  CreditsCreateOrConnectWithoutFileInput: ["where", "create"],
  CreditsCreateManyFileInputEnvelope: ["data", "skipDuplicates"],
  MovementCreateWithoutFileInput: ["id", "centerOfCost", "postalCard", "postingDate", "service", "itemQty", "weight", "unitCost", "serviceValue", "documentNumber", "label", "declaredValue", "discountValue", "operationalDiscountCode", "additionalServiceCode", "postingUnit", "originCity", "destinationCity", "originPostalCode", "destinationPostalCode", "height", "width", "length", "diameter", "realWeight", "updatedAt", "createdAt"],
  MovementCreateOrConnectWithoutFileInput: ["where", "create"],
  MovementCreateManyFileInputEnvelope: ["data", "skipDuplicates"],
  CompanyCreateWithoutFilesInput: ["cnpj", "name", "clientCode", "contractNumber", "contractDr", "updatedAt", "createdAt", "movements"],
  CompanyCreateOrConnectWithoutFilesInput: ["where", "create"],
  DebitsUpsertWithWhereUniqueWithoutReceiptInput: ["where", "update", "create"],
  DebitsUpdateWithWhereUniqueWithoutReceiptInput: ["where", "data"],
  DebitsUpdateManyWithWhereWithoutReceiptInput: ["where", "data"],
  DebitsScalarWhereInput: ["AND", "OR", "NOT", "id", "description", "value", "date", "fileId", "updatedAt", "createdAt"],
  CreditsUpsertWithWhereUniqueWithoutFileInput: ["where", "update", "create"],
  CreditsUpdateWithWhereUniqueWithoutFileInput: ["where", "data"],
  CreditsUpdateManyWithWhereWithoutFileInput: ["where", "data"],
  CreditsScalarWhereInput: ["AND", "OR", "NOT", "id", "description", "value", "date", "fileId", "updatedAt", "createdAt"],
  MovementUpsertWithWhereUniqueWithoutFileInput: ["where", "update", "create"],
  MovementUpdateWithWhereUniqueWithoutFileInput: ["where", "data"],
  MovementUpdateManyWithWhereWithoutFileInput: ["where", "data"],
  CompanyUpsertWithoutFilesInput: ["update", "create"],
  CompanyUpdateWithoutFilesInput: ["cnpj", "name", "clientCode", "contractNumber", "contractDr", "updatedAt", "createdAt", "movements"],
  FileCreateWithoutCreditsInput: ["name", "date", "debits", "movements", "company", "processed", "movementsProcessed", "creditsProcessed", "debitsProcessed", "fileType", "updatedAt", "createdAt"],
  FileCreateOrConnectWithoutCreditsInput: ["where", "create"],
  FileUpsertWithoutCreditsInput: ["update", "create"],
  FileUpdateWithoutCreditsInput: ["name", "date", "debits", "movements", "company", "processed", "movementsProcessed", "creditsProcessed", "debitsProcessed", "fileType", "updatedAt", "createdAt"],
  FileCreateWithoutDebitsInput: ["name", "date", "credits", "movements", "company", "processed", "movementsProcessed", "creditsProcessed", "debitsProcessed", "fileType", "updatedAt", "createdAt"],
  FileCreateOrConnectWithoutDebitsInput: ["where", "create"],
  FileUpsertWithoutDebitsInput: ["update", "create"],
  FileUpdateWithoutDebitsInput: ["name", "date", "credits", "movements", "company", "processed", "movementsProcessed", "creditsProcessed", "debitsProcessed", "fileType", "updatedAt", "createdAt"],
  MovementCreateWithoutPostalCardInput: ["id", "centerOfCost", "postingDate", "service", "itemQty", "weight", "unitCost", "serviceValue", "documentNumber", "label", "declaredValue", "discountValue", "operationalDiscountCode", "additionalServiceCode", "postingUnit", "originCity", "destinationCity", "originPostalCode", "destinationPostalCode", "height", "width", "length", "diameter", "realWeight", "file", "updatedAt", "createdAt"],
  MovementCreateOrConnectWithoutPostalCardInput: ["where", "create"],
  MovementCreateManyPostalCardInputEnvelope: ["data", "skipDuplicates"],
  MovementUpsertWithWhereUniqueWithoutPostalCardInput: ["where", "update", "create"],
  MovementUpdateWithWhereUniqueWithoutPostalCardInput: ["where", "data"],
  MovementUpdateManyWithWhereWithoutPostalCardInput: ["where", "data"],
  MovementCreateWithoutServiceInput: ["id", "centerOfCost", "postalCard", "postingDate", "itemQty", "weight", "unitCost", "serviceValue", "documentNumber", "label", "declaredValue", "discountValue", "operationalDiscountCode", "additionalServiceCode", "postingUnit", "originCity", "destinationCity", "originPostalCode", "destinationPostalCode", "height", "width", "length", "diameter", "realWeight", "file", "updatedAt", "createdAt"],
  MovementCreateOrConnectWithoutServiceInput: ["where", "create"],
  MovementCreateManyServiceInputEnvelope: ["data", "skipDuplicates"],
  MovementUpsertWithWhereUniqueWithoutServiceInput: ["where", "update", "create"],
  MovementUpdateWithWhereUniqueWithoutServiceInput: ["where", "data"],
  MovementUpdateManyWithWhereWithoutServiceInput: ["where", "data"],
  MovementCreateWithoutPostingUnitInput: ["id", "centerOfCost", "postalCard", "postingDate", "service", "itemQty", "weight", "unitCost", "serviceValue", "documentNumber", "label", "declaredValue", "discountValue", "operationalDiscountCode", "additionalServiceCode", "originCity", "destinationCity", "originPostalCode", "destinationPostalCode", "height", "width", "length", "diameter", "realWeight", "file", "updatedAt", "createdAt"],
  MovementCreateOrConnectWithoutPostingUnitInput: ["where", "create"],
  MovementCreateManyPostingUnitInputEnvelope: ["data", "skipDuplicates"],
  MovementUpsertWithWhereUniqueWithoutPostingUnitInput: ["where", "update", "create"],
  MovementUpdateWithWhereUniqueWithoutPostingUnitInput: ["where", "data"],
  MovementUpdateManyWithWhereWithoutPostingUnitInput: ["where", "data"],
  CompanyCreateWithoutMovementsInput: ["cnpj", "name", "clientCode", "contractNumber", "contractDr", "updatedAt", "createdAt", "files"],
  CompanyCreateOrConnectWithoutMovementsInput: ["where", "create"],
  PostalCardCreateWithoutMovementsInput: ["number", "owner", "updatedAt", "createdAt"],
  PostalCardCreateOrConnectWithoutMovementsInput: ["where", "create"],
  ServiceCreateWithoutMovementsInput: ["name", "code", "updatedAt", "createdAt"],
  ServiceCreateOrConnectWithoutMovementsInput: ["where", "create"],
  PostingUnitCreateWithoutMovementsInput: ["name", "updatedAt", "createdAt"],
  PostingUnitCreateOrConnectWithoutMovementsInput: ["where", "create"],
  CityCreateWithoutMovementsOriginCityInput: ["name", "state", "destinationOriginCity", "updatedAt", "createdAt"],
  CityCreateOrConnectWithoutMovementsOriginCityInput: ["where", "create"],
  CityCreateWithoutDestinationOriginCityInput: ["name", "state", "movementsOriginCity", "updatedAt", "createdAt"],
  CityCreateOrConnectWithoutDestinationOriginCityInput: ["where", "create"],
  FileCreateWithoutMovementsInput: ["name", "date", "debits", "credits", "company", "processed", "movementsProcessed", "creditsProcessed", "debitsProcessed", "fileType", "updatedAt", "createdAt"],
  FileCreateOrConnectWithoutMovementsInput: ["where", "create"],
  CompanyUpsertWithoutMovementsInput: ["update", "create"],
  CompanyUpdateWithoutMovementsInput: ["cnpj", "name", "clientCode", "contractNumber", "contractDr", "updatedAt", "createdAt", "files"],
  PostalCardUpsertWithoutMovementsInput: ["update", "create"],
  PostalCardUpdateWithoutMovementsInput: ["number", "owner", "updatedAt", "createdAt"],
  ServiceUpsertWithoutMovementsInput: ["update", "create"],
  ServiceUpdateWithoutMovementsInput: ["name", "code", "updatedAt", "createdAt"],
  PostingUnitUpsertWithoutMovementsInput: ["update", "create"],
  PostingUnitUpdateWithoutMovementsInput: ["name", "updatedAt", "createdAt"],
  CityUpsertWithoutMovementsOriginCityInput: ["update", "create"],
  CityUpdateWithoutMovementsOriginCityInput: ["name", "state", "destinationOriginCity", "updatedAt", "createdAt"],
  CityUpsertWithoutDestinationOriginCityInput: ["update", "create"],
  CityUpdateWithoutDestinationOriginCityInput: ["name", "state", "movementsOriginCity", "updatedAt", "createdAt"],
  FileUpsertWithoutMovementsInput: ["update", "create"],
  FileUpdateWithoutMovementsInput: ["name", "date", "debits", "credits", "company", "processed", "movementsProcessed", "creditsProcessed", "debitsProcessed", "fileType", "updatedAt", "createdAt"],
  CityCreateWithoutStateInput: ["name", "movementsOriginCity", "destinationOriginCity", "updatedAt", "createdAt"],
  CityCreateOrConnectWithoutStateInput: ["where", "create"],
  CityCreateManyStateInputEnvelope: ["data", "skipDuplicates"],
  CityUpsertWithWhereUniqueWithoutStateInput: ["where", "update", "create"],
  CityUpdateWithWhereUniqueWithoutStateInput: ["where", "data"],
  CityUpdateManyWithWhereWithoutStateInput: ["where", "data"],
  CityScalarWhereInput: ["AND", "OR", "NOT", "id", "name", "stateId", "updatedAt", "createdAt"],
  StateCreateWithoutCitiesInput: ["name", "updatedAt", "createdAt"],
  StateCreateOrConnectWithoutCitiesInput: ["where", "create"],
  MovementCreateWithoutOriginCityInput: ["id", "centerOfCost", "postalCard", "postingDate", "service", "itemQty", "weight", "unitCost", "serviceValue", "documentNumber", "label", "declaredValue", "discountValue", "operationalDiscountCode", "additionalServiceCode", "postingUnit", "destinationCity", "originPostalCode", "destinationPostalCode", "height", "width", "length", "diameter", "realWeight", "file", "updatedAt", "createdAt"],
  MovementCreateOrConnectWithoutOriginCityInput: ["where", "create"],
  MovementCreateManyOriginCityInputEnvelope: ["data", "skipDuplicates"],
  MovementCreateWithoutDestinationCityInput: ["id", "centerOfCost", "postalCard", "postingDate", "service", "itemQty", "weight", "unitCost", "serviceValue", "documentNumber", "label", "declaredValue", "discountValue", "operationalDiscountCode", "additionalServiceCode", "postingUnit", "originCity", "originPostalCode", "destinationPostalCode", "height", "width", "length", "diameter", "realWeight", "file", "updatedAt", "createdAt"],
  MovementCreateOrConnectWithoutDestinationCityInput: ["where", "create"],
  MovementCreateManyDestinationCityInputEnvelope: ["data", "skipDuplicates"],
  StateUpsertWithoutCitiesInput: ["update", "create"],
  StateUpdateWithoutCitiesInput: ["name", "updatedAt", "createdAt"],
  MovementUpsertWithWhereUniqueWithoutOriginCityInput: ["where", "update", "create"],
  MovementUpdateWithWhereUniqueWithoutOriginCityInput: ["where", "data"],
  MovementUpdateManyWithWhereWithoutOriginCityInput: ["where", "data"],
  MovementUpsertWithWhereUniqueWithoutDestinationCityInput: ["where", "update", "create"],
  MovementUpdateWithWhereUniqueWithoutDestinationCityInput: ["where", "data"],
  MovementUpdateManyWithWhereWithoutDestinationCityInput: ["where", "data"],
  FileCreateManyCompanyInput: ["id", "name", "date", "processed", "movementsProcessed", "creditsProcessed", "debitsProcessed", "fileType", "updatedAt", "createdAt"],
  MovementCreateManyCenterOfCostInput: ["id", "postalCardId", "postingDate", "serviceId", "itemQty", "weight", "unitCost", "serviceValue", "documentNumber", "label", "declaredValue", "discountValue", "operationalDiscountCode", "additionalServiceCode", "postingUnitId", "originCityId", "destinationCityId", "originPostalCode", "destinationPostalCode", "height", "width", "length", "diameter", "realWeight", "fileId", "updatedAt", "createdAt"],
  FileUpdateWithoutCompanyInput: ["name", "date", "debits", "credits", "movements", "processed", "movementsProcessed", "creditsProcessed", "debitsProcessed", "fileType", "updatedAt", "createdAt"],
  MovementUpdateWithoutCenterOfCostInput: ["id", "postalCard", "postingDate", "service", "itemQty", "weight", "unitCost", "serviceValue", "documentNumber", "label", "declaredValue", "discountValue", "operationalDiscountCode", "additionalServiceCode", "postingUnit", "originCity", "destinationCity", "originPostalCode", "destinationPostalCode", "height", "width", "length", "diameter", "realWeight", "file", "updatedAt", "createdAt"],
  DebitsCreateManyReceiptInput: ["id", "description", "value", "date", "updatedAt", "createdAt"],
  CreditsCreateManyFileInput: ["id", "description", "value", "date", "updatedAt", "createdAt"],
  MovementCreateManyFileInput: ["id", "centerOfCostId", "postalCardId", "postingDate", "serviceId", "itemQty", "weight", "unitCost", "serviceValue", "documentNumber", "label", "declaredValue", "discountValue", "operationalDiscountCode", "additionalServiceCode", "postingUnitId", "originCityId", "destinationCityId", "originPostalCode", "destinationPostalCode", "height", "width", "length", "diameter", "realWeight", "updatedAt", "createdAt"],
  DebitsUpdateWithoutReceiptInput: ["id", "description", "value", "date", "updatedAt", "createdAt"],
  CreditsUpdateWithoutFileInput: ["id", "description", "value", "date", "updatedAt", "createdAt"],
  MovementUpdateWithoutFileInput: ["id", "centerOfCost", "postalCard", "postingDate", "service", "itemQty", "weight", "unitCost", "serviceValue", "documentNumber", "label", "declaredValue", "discountValue", "operationalDiscountCode", "additionalServiceCode", "postingUnit", "originCity", "destinationCity", "originPostalCode", "destinationPostalCode", "height", "width", "length", "diameter", "realWeight", "updatedAt", "createdAt"],
  MovementCreateManyPostalCardInput: ["id", "centerOfCostId", "postingDate", "serviceId", "itemQty", "weight", "unitCost", "serviceValue", "documentNumber", "label", "declaredValue", "discountValue", "operationalDiscountCode", "additionalServiceCode", "postingUnitId", "originCityId", "destinationCityId", "originPostalCode", "destinationPostalCode", "height", "width", "length", "diameter", "realWeight", "fileId", "updatedAt", "createdAt"],
  MovementUpdateWithoutPostalCardInput: ["id", "centerOfCost", "postingDate", "service", "itemQty", "weight", "unitCost", "serviceValue", "documentNumber", "label", "declaredValue", "discountValue", "operationalDiscountCode", "additionalServiceCode", "postingUnit", "originCity", "destinationCity", "originPostalCode", "destinationPostalCode", "height", "width", "length", "diameter", "realWeight", "file", "updatedAt", "createdAt"],
  MovementCreateManyServiceInput: ["id", "centerOfCostId", "postalCardId", "postingDate", "itemQty", "weight", "unitCost", "serviceValue", "documentNumber", "label", "declaredValue", "discountValue", "operationalDiscountCode", "additionalServiceCode", "postingUnitId", "originCityId", "destinationCityId", "originPostalCode", "destinationPostalCode", "height", "width", "length", "diameter", "realWeight", "fileId", "updatedAt", "createdAt"],
  MovementUpdateWithoutServiceInput: ["id", "centerOfCost", "postalCard", "postingDate", "itemQty", "weight", "unitCost", "serviceValue", "documentNumber", "label", "declaredValue", "discountValue", "operationalDiscountCode", "additionalServiceCode", "postingUnit", "originCity", "destinationCity", "originPostalCode", "destinationPostalCode", "height", "width", "length", "diameter", "realWeight", "file", "updatedAt", "createdAt"],
  MovementCreateManyPostingUnitInput: ["id", "centerOfCostId", "postalCardId", "postingDate", "serviceId", "itemQty", "weight", "unitCost", "serviceValue", "documentNumber", "label", "declaredValue", "discountValue", "operationalDiscountCode", "additionalServiceCode", "originCityId", "destinationCityId", "originPostalCode", "destinationPostalCode", "height", "width", "length", "diameter", "realWeight", "fileId", "updatedAt", "createdAt"],
  MovementUpdateWithoutPostingUnitInput: ["id", "centerOfCost", "postalCard", "postingDate", "service", "itemQty", "weight", "unitCost", "serviceValue", "documentNumber", "label", "declaredValue", "discountValue", "operationalDiscountCode", "additionalServiceCode", "originCity", "destinationCity", "originPostalCode", "destinationPostalCode", "height", "width", "length", "diameter", "realWeight", "file", "updatedAt", "createdAt"],
  CityCreateManyStateInput: ["id", "name", "updatedAt", "createdAt"],
  CityUpdateWithoutStateInput: ["name", "movementsOriginCity", "destinationOriginCity", "updatedAt", "createdAt"],
  MovementCreateManyOriginCityInput: ["id", "centerOfCostId", "postalCardId", "postingDate", "serviceId", "itemQty", "weight", "unitCost", "serviceValue", "documentNumber", "label", "declaredValue", "discountValue", "operationalDiscountCode", "additionalServiceCode", "postingUnitId", "destinationCityId", "originPostalCode", "destinationPostalCode", "height", "width", "length", "diameter", "realWeight", "fileId", "updatedAt", "createdAt"],
  MovementCreateManyDestinationCityInput: ["id", "centerOfCostId", "postalCardId", "postingDate", "serviceId", "itemQty", "weight", "unitCost", "serviceValue", "documentNumber", "label", "declaredValue", "discountValue", "operationalDiscountCode", "additionalServiceCode", "postingUnitId", "originCityId", "originPostalCode", "destinationPostalCode", "height", "width", "length", "diameter", "realWeight", "fileId", "updatedAt", "createdAt"],
  MovementUpdateWithoutOriginCityInput: ["id", "centerOfCost", "postalCard", "postingDate", "service", "itemQty", "weight", "unitCost", "serviceValue", "documentNumber", "label", "declaredValue", "discountValue", "operationalDiscountCode", "additionalServiceCode", "postingUnit", "destinationCity", "originPostalCode", "destinationPostalCode", "height", "width", "length", "diameter", "realWeight", "file", "updatedAt", "createdAt"],
  MovementUpdateWithoutDestinationCityInput: ["id", "centerOfCost", "postalCard", "postingDate", "service", "itemQty", "weight", "unitCost", "serviceValue", "documentNumber", "label", "declaredValue", "discountValue", "operationalDiscountCode", "additionalServiceCode", "postingUnit", "originCity", "originPostalCode", "destinationPostalCode", "height", "width", "length", "diameter", "realWeight", "file", "updatedAt", "createdAt"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
  > = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

