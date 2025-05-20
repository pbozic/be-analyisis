import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driver_municipalitiesWhereUniqueInputSchema } from './driver_municipalitiesWhereUniqueInputSchema';
import { driver_municipalitiesUpdateWithoutDriversInputSchema } from './driver_municipalitiesUpdateWithoutDriversInputSchema';
import { driver_municipalitiesUncheckedUpdateWithoutDriversInputSchema } from './driver_municipalitiesUncheckedUpdateWithoutDriversInputSchema';
import { driver_municipalitiesCreateWithoutDriversInputSchema } from './driver_municipalitiesCreateWithoutDriversInputSchema';
import { driver_municipalitiesUncheckedCreateWithoutDriversInputSchema } from './driver_municipalitiesUncheckedCreateWithoutDriversInputSchema';

export const driver_municipalitiesUpsertWithWhereUniqueWithoutDriversInputSchema: z.ZodType<Prisma.driver_municipalitiesUpsertWithWhereUniqueWithoutDriversInput> = z.object({
  where: z.lazy(() => driver_municipalitiesWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => driver_municipalitiesUpdateWithoutDriversInputSchema),z.lazy(() => driver_municipalitiesUncheckedUpdateWithoutDriversInputSchema) ]),
  create: z.union([ z.lazy(() => driver_municipalitiesCreateWithoutDriversInputSchema),z.lazy(() => driver_municipalitiesUncheckedCreateWithoutDriversInputSchema) ]),
}).strict();

export default driver_municipalitiesUpsertWithWhereUniqueWithoutDriversInputSchema;
