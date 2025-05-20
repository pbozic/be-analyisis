import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { vehicle_driversWhereUniqueInputSchema } from './vehicle_driversWhereUniqueInputSchema';
import { vehicle_driversUpdateWithoutDriverInputSchema } from './vehicle_driversUpdateWithoutDriverInputSchema';
import { vehicle_driversUncheckedUpdateWithoutDriverInputSchema } from './vehicle_driversUncheckedUpdateWithoutDriverInputSchema';

export const vehicle_driversUpdateWithWhereUniqueWithoutDriverInputSchema: z.ZodType<Prisma.vehicle_driversUpdateWithWhereUniqueWithoutDriverInput> = z.object({
  where: z.lazy(() => vehicle_driversWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => vehicle_driversUpdateWithoutDriverInputSchema),z.lazy(() => vehicle_driversUncheckedUpdateWithoutDriverInputSchema) ]),
}).strict();

export default vehicle_driversUpdateWithWhereUniqueWithoutDriverInputSchema;
