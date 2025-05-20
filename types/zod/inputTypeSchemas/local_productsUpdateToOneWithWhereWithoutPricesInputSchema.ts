import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { local_productsWhereInputSchema } from './local_productsWhereInputSchema';
import { local_productsUpdateWithoutPricesInputSchema } from './local_productsUpdateWithoutPricesInputSchema';
import { local_productsUncheckedUpdateWithoutPricesInputSchema } from './local_productsUncheckedUpdateWithoutPricesInputSchema';

export const local_productsUpdateToOneWithWhereWithoutPricesInputSchema: z.ZodType<Prisma.local_productsUpdateToOneWithWhereWithoutPricesInput> = z.object({
  where: z.lazy(() => local_productsWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => local_productsUpdateWithoutPricesInputSchema),z.lazy(() => local_productsUncheckedUpdateWithoutPricesInputSchema) ]),
}).strict();

export default local_productsUpdateToOneWithWhereWithoutPricesInputSchema;
