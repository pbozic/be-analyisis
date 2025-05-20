import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { vehicle_driversScalarWhereInputSchema } from './vehicle_driversScalarWhereInputSchema';
import { vehicle_driversUpdateManyMutationInputSchema } from './vehicle_driversUpdateManyMutationInputSchema';
import { vehicle_driversUncheckedUpdateManyWithoutDriverInputSchema } from './vehicle_driversUncheckedUpdateManyWithoutDriverInputSchema';

export const vehicle_driversUpdateManyWithWhereWithoutDriverInputSchema: z.ZodType<Prisma.vehicle_driversUpdateManyWithWhereWithoutDriverInput> = z.object({
  where: z.lazy(() => vehicle_driversScalarWhereInputSchema),
  data: z.union([ z.lazy(() => vehicle_driversUpdateManyMutationInputSchema),z.lazy(() => vehicle_driversUncheckedUpdateManyWithoutDriverInputSchema) ]),
}).strict();

export default vehicle_driversUpdateManyWithWhereWithoutDriverInputSchema;
