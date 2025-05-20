import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessUpdateWithoutBusiness_order_lobbiesInputSchema } from './businessUpdateWithoutBusiness_order_lobbiesInputSchema';
import { businessUncheckedUpdateWithoutBusiness_order_lobbiesInputSchema } from './businessUncheckedUpdateWithoutBusiness_order_lobbiesInputSchema';
import { businessCreateWithoutBusiness_order_lobbiesInputSchema } from './businessCreateWithoutBusiness_order_lobbiesInputSchema';
import { businessUncheckedCreateWithoutBusiness_order_lobbiesInputSchema } from './businessUncheckedCreateWithoutBusiness_order_lobbiesInputSchema';
import { businessWhereInputSchema } from './businessWhereInputSchema';

export const businessUpsertWithoutBusiness_order_lobbiesInputSchema: z.ZodType<Prisma.businessUpsertWithoutBusiness_order_lobbiesInput> = z.object({
  update: z.union([ z.lazy(() => businessUpdateWithoutBusiness_order_lobbiesInputSchema),z.lazy(() => businessUncheckedUpdateWithoutBusiness_order_lobbiesInputSchema) ]),
  create: z.union([ z.lazy(() => businessCreateWithoutBusiness_order_lobbiesInputSchema),z.lazy(() => businessUncheckedCreateWithoutBusiness_order_lobbiesInputSchema) ]),
  where: z.lazy(() => businessWhereInputSchema).optional()
}).strict();

export default businessUpsertWithoutBusiness_order_lobbiesInputSchema;
