import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { local_productsWhereUniqueInputSchema } from './local_productsWhereUniqueInputSchema';
import { local_productsCreateWithoutPricesInputSchema } from './local_productsCreateWithoutPricesInputSchema';
import { local_productsUncheckedCreateWithoutPricesInputSchema } from './local_productsUncheckedCreateWithoutPricesInputSchema';

export const local_productsCreateOrConnectWithoutPricesInputSchema: z.ZodType<Prisma.local_productsCreateOrConnectWithoutPricesInput> = z.object({
  where: z.lazy(() => local_productsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => local_productsCreateWithoutPricesInputSchema),z.lazy(() => local_productsUncheckedCreateWithoutPricesInputSchema) ]),
}).strict();

export default local_productsCreateOrConnectWithoutPricesInputSchema;
