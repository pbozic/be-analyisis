import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_driversWhereInputSchema } from './delivery_driversWhereInputSchema';
import { delivery_driversUpdateWithoutOrdersInputSchema } from './delivery_driversUpdateWithoutOrdersInputSchema';
import { delivery_driversUncheckedUpdateWithoutOrdersInputSchema } from './delivery_driversUncheckedUpdateWithoutOrdersInputSchema';

export const delivery_driversUpdateToOneWithWhereWithoutOrdersInputSchema: z.ZodType<Prisma.delivery_driversUpdateToOneWithWhereWithoutOrdersInput> = z.object({
  where: z.lazy(() => delivery_driversWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => delivery_driversUpdateWithoutOrdersInputSchema),z.lazy(() => delivery_driversUncheckedUpdateWithoutOrdersInputSchema) ]),
}).strict();

export default delivery_driversUpdateToOneWithWhereWithoutOrdersInputSchema;
