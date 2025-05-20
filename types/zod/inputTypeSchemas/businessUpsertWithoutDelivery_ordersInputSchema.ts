import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessUpdateWithoutDelivery_ordersInputSchema } from './businessUpdateWithoutDelivery_ordersInputSchema';
import { businessUncheckedUpdateWithoutDelivery_ordersInputSchema } from './businessUncheckedUpdateWithoutDelivery_ordersInputSchema';
import { businessCreateWithoutDelivery_ordersInputSchema } from './businessCreateWithoutDelivery_ordersInputSchema';
import { businessUncheckedCreateWithoutDelivery_ordersInputSchema } from './businessUncheckedCreateWithoutDelivery_ordersInputSchema';
import { businessWhereInputSchema } from './businessWhereInputSchema';

export const businessUpsertWithoutDelivery_ordersInputSchema: z.ZodType<Prisma.businessUpsertWithoutDelivery_ordersInput> = z.object({
  update: z.union([ z.lazy(() => businessUpdateWithoutDelivery_ordersInputSchema),z.lazy(() => businessUncheckedUpdateWithoutDelivery_ordersInputSchema) ]),
  create: z.union([ z.lazy(() => businessCreateWithoutDelivery_ordersInputSchema),z.lazy(() => businessUncheckedCreateWithoutDelivery_ordersInputSchema) ]),
  where: z.lazy(() => businessWhereInputSchema).optional()
}).strict();

export default businessUpsertWithoutDelivery_ordersInputSchema;
