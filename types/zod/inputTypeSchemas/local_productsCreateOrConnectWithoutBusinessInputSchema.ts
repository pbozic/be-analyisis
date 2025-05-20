import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { local_productsWhereUniqueInputSchema } from './local_productsWhereUniqueInputSchema';
import { local_productsCreateWithoutBusinessInputSchema } from './local_productsCreateWithoutBusinessInputSchema';
import { local_productsUncheckedCreateWithoutBusinessInputSchema } from './local_productsUncheckedCreateWithoutBusinessInputSchema';

export const local_productsCreateOrConnectWithoutBusinessInputSchema: z.ZodType<Prisma.local_productsCreateOrConnectWithoutBusinessInput> = z.object({
  where: z.lazy(() => local_productsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => local_productsCreateWithoutBusinessInputSchema),z.lazy(() => local_productsUncheckedCreateWithoutBusinessInputSchema) ]),
}).strict();

export default local_productsCreateOrConnectWithoutBusinessInputSchema;
