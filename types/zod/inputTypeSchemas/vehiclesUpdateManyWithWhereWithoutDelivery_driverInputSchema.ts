import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { vehiclesScalarWhereInputSchema } from './vehiclesScalarWhereInputSchema';
import { vehiclesUpdateManyMutationInputSchema } from './vehiclesUpdateManyMutationInputSchema';
import { vehiclesUncheckedUpdateManyWithoutDelivery_driverInputSchema } from './vehiclesUncheckedUpdateManyWithoutDelivery_driverInputSchema';

export const vehiclesUpdateManyWithWhereWithoutDelivery_driverInputSchema: z.ZodType<Prisma.vehiclesUpdateManyWithWhereWithoutDelivery_driverInput> = z.object({
  where: z.lazy(() => vehiclesScalarWhereInputSchema),
  data: z.union([ z.lazy(() => vehiclesUpdateManyMutationInputSchema),z.lazy(() => vehiclesUncheckedUpdateManyWithoutDelivery_driverInputSchema) ]),
}).strict();

export default vehiclesUpdateManyWithWhereWithoutDelivery_driverInputSchema;
