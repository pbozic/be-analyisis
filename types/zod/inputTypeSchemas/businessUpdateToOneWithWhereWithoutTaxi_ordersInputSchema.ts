import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessWhereInputSchema } from './businessWhereInputSchema';
import { businessUpdateWithoutTaxi_ordersInputSchema } from './businessUpdateWithoutTaxi_ordersInputSchema';
import { businessUncheckedUpdateWithoutTaxi_ordersInputSchema } from './businessUncheckedUpdateWithoutTaxi_ordersInputSchema';

export const businessUpdateToOneWithWhereWithoutTaxi_ordersInputSchema: z.ZodType<Prisma.businessUpdateToOneWithWhereWithoutTaxi_ordersInput> = z.object({
  where: z.lazy(() => businessWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => businessUpdateWithoutTaxi_ordersInputSchema),z.lazy(() => businessUncheckedUpdateWithoutTaxi_ordersInputSchema) ]),
}).strict();

export default businessUpdateToOneWithWhereWithoutTaxi_ordersInputSchema;
