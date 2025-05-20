import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { local_productsUpdateWithoutBusinessInputSchema } from './local_productsUpdateWithoutBusinessInputSchema';
import { local_productsUncheckedUpdateWithoutBusinessInputSchema } from './local_productsUncheckedUpdateWithoutBusinessInputSchema';
import { local_productsCreateWithoutBusinessInputSchema } from './local_productsCreateWithoutBusinessInputSchema';
import { local_productsUncheckedCreateWithoutBusinessInputSchema } from './local_productsUncheckedCreateWithoutBusinessInputSchema';
import { local_productsWhereInputSchema } from './local_productsWhereInputSchema';

export const local_productsUpsertWithoutBusinessInputSchema: z.ZodType<Prisma.local_productsUpsertWithoutBusinessInput> = z.object({
  update: z.union([ z.lazy(() => local_productsUpdateWithoutBusinessInputSchema),z.lazy(() => local_productsUncheckedUpdateWithoutBusinessInputSchema) ]),
  create: z.union([ z.lazy(() => local_productsCreateWithoutBusinessInputSchema),z.lazy(() => local_productsUncheckedCreateWithoutBusinessInputSchema) ]),
  where: z.lazy(() => local_productsWhereInputSchema).optional()
}).strict();

export default local_productsUpsertWithoutBusinessInputSchema;
