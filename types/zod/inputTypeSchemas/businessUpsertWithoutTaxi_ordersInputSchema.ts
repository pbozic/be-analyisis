import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessUpdateWithoutTaxi_ordersInputSchema } from './businessUpdateWithoutTaxi_ordersInputSchema';
import { businessUncheckedUpdateWithoutTaxi_ordersInputSchema } from './businessUncheckedUpdateWithoutTaxi_ordersInputSchema';
import { businessCreateWithoutTaxi_ordersInputSchema } from './businessCreateWithoutTaxi_ordersInputSchema';
import { businessUncheckedCreateWithoutTaxi_ordersInputSchema } from './businessUncheckedCreateWithoutTaxi_ordersInputSchema';
import { businessWhereInputSchema } from './businessWhereInputSchema';

export const businessUpsertWithoutTaxi_ordersInputSchema: z.ZodType<Prisma.businessUpsertWithoutTaxi_ordersInput> = z.object({
  update: z.union([ z.lazy(() => businessUpdateWithoutTaxi_ordersInputSchema),z.lazy(() => businessUncheckedUpdateWithoutTaxi_ordersInputSchema) ]),
  create: z.union([ z.lazy(() => businessCreateWithoutTaxi_ordersInputSchema),z.lazy(() => businessUncheckedCreateWithoutTaxi_ordersInputSchema) ]),
  where: z.lazy(() => businessWhereInputSchema).optional()
}).strict();

export default businessUpsertWithoutTaxi_ordersInputSchema;
