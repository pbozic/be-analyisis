import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessWhereInputSchema } from './businessWhereInputSchema';
import { businessUpdateWithoutReservationsInputSchema } from './businessUpdateWithoutReservationsInputSchema';
import { businessUncheckedUpdateWithoutReservationsInputSchema } from './businessUncheckedUpdateWithoutReservationsInputSchema';

export const businessUpdateToOneWithWhereWithoutReservationsInputSchema: z.ZodType<Prisma.businessUpdateToOneWithWhereWithoutReservationsInput> = z.object({
  where: z.lazy(() => businessWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => businessUpdateWithoutReservationsInputSchema),z.lazy(() => businessUncheckedUpdateWithoutReservationsInputSchema) ]),
}).strict();

export default businessUpdateToOneWithWhereWithoutReservationsInputSchema;
