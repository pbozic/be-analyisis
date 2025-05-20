import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_driversUpdateWithoutOrdersInputSchema } from './delivery_driversUpdateWithoutOrdersInputSchema';
import { delivery_driversUncheckedUpdateWithoutOrdersInputSchema } from './delivery_driversUncheckedUpdateWithoutOrdersInputSchema';
import { delivery_driversCreateWithoutOrdersInputSchema } from './delivery_driversCreateWithoutOrdersInputSchema';
import { delivery_driversUncheckedCreateWithoutOrdersInputSchema } from './delivery_driversUncheckedCreateWithoutOrdersInputSchema';
import { delivery_driversWhereInputSchema } from './delivery_driversWhereInputSchema';

export const delivery_driversUpsertWithoutOrdersInputSchema: z.ZodType<Prisma.delivery_driversUpsertWithoutOrdersInput> = z.object({
  update: z.union([ z.lazy(() => delivery_driversUpdateWithoutOrdersInputSchema),z.lazy(() => delivery_driversUncheckedUpdateWithoutOrdersInputSchema) ]),
  create: z.union([ z.lazy(() => delivery_driversCreateWithoutOrdersInputSchema),z.lazy(() => delivery_driversUncheckedCreateWithoutOrdersInputSchema) ]),
  where: z.lazy(() => delivery_driversWhereInputSchema).optional()
}).strict();

export default delivery_driversUpsertWithoutOrdersInputSchema;
