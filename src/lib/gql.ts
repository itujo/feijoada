// eslint-disable-next-line import/no-extraneous-dependencies
import type { ResolversEnhanceMap } from '@generated/type-graphql';
import { Authorized } from 'type-graphql';

const resolversEnhanceMap: ResolversEnhanceMap = {
  Movement: {
    _all: [Authorized('ADMIN')],
  },
};

export { resolversEnhanceMap };
