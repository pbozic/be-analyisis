import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { vehicle_driversWhereUniqueInputSchema } from './vehicle_driversWhereUniqueInputSchema';
import { vehicle_driversUpdateWithoutDriverInputSchema } from './vehicle_driversUpdateWithoutDriverInputSchema';
import { vehicle_driversUncheckedUpdateWithoutDriverInputSchema } from './vehicle_driversUncheckedUpdateWithoutDriverInputSchema';
import { vehicle_driversCreateWithoutDriverInputSchema } from './vehicle_driversCreateWithoutDriverInputSchema';
import { vehicle_driversUncheckedCreateWithoutDriverInputSchema } from './vehicle_driversUncheckedCreateWithoutDriverInputSchema';

export const vehicle_driversUpsertWithWhereUniqueWithoutDriverInputSchema: z.ZodType<Prisma.vehicle_driversUpsertWithWhereUniqueWithoutDriverInput> = z.object({
  where: z.lazy(() => vehicle_driversWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => vehicle_driversUpdateWithoutDriverInputSchema),z.lazy(() => vehicle_driversUncheckedUpdateWithoutDriverInputSchema) ]),
  create: z.union([ z.lazy(() => vehicle_driversCreateWithoutDriverInputSchema),z.lazy(() => vehicle_driversUncheckedCreateWithoutDriverInputSchema) ]),
}).strict();

export default vehicle_driversUpsertWithWhereUniqueWithoutDriverInputSchema;
