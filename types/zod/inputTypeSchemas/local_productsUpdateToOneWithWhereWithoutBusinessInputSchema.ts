import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { local_productsWhereInputSchema } from './local_productsWhereInputSchema';
import { local_productsUpdateWithoutBusinessInputSchema } from './local_productsUpdateWithoutBusinessInputSchema';
import { local_productsUncheckedUpdateWithoutBusinessInputSchema } from './local_productsUncheckedUpdateWithoutBusinessInputSchema';

export const local_productsUpdateToOneWithWhereWithoutBusinessInputSchema: z.ZodType<Prisma.local_productsUpdateToOneWithWhereWithoutBusinessInput> = z.object({
  where: z.lazy(() => local_productsWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => local_productsUpdateWithoutBusinessInputSchema),z.lazy(() => local_productsUncheckedUpdateWithoutBusinessInputSchema) ]),
}).strict();

export default local_productsUpdateToOneWithWhereWithoutBusinessInputSchema;
