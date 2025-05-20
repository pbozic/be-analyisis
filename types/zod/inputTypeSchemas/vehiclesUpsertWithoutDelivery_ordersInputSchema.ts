import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { vehiclesUpdateWithoutDelivery_ordersInputSchema } from './vehiclesUpdateWithoutDelivery_ordersInputSchema';
import { vehiclesUncheckedUpdateWithoutDelivery_ordersInputSchema } from './vehiclesUncheckedUpdateWithoutDelivery_ordersInputSchema';
import { vehiclesCreateWithoutDelivery_ordersInputSchema } from './vehiclesCreateWithoutDelivery_ordersInputSchema';
import { vehiclesUncheckedCreateWithoutDelivery_ordersInputSchema } from './vehiclesUncheckedCreateWithoutDelivery_ordersInputSchema';
import { vehiclesWhereInputSchema } from './vehiclesWhereInputSchema';

export const vehiclesUpsertWithoutDelivery_ordersInputSchema: z.ZodType<Prisma.vehiclesUpsertWithoutDelivery_ordersInput> = z.object({
  update: z.union([ z.lazy(() => vehiclesUpdateWithoutDelivery_ordersInputSchema),z.lazy(() => vehiclesUncheckedUpdateWithoutDelivery_ordersInputSchema) ]),
  create: z.union([ z.lazy(() => vehiclesCreateWithoutDelivery_ordersInputSchema),z.lazy(() => vehiclesUncheckedCreateWithoutDelivery_ordersInputSchema) ]),
  where: z.lazy(() => vehiclesWhereInputSchema).optional()
}).strict();

export default vehiclesUpsertWithoutDelivery_ordersInputSchema;
