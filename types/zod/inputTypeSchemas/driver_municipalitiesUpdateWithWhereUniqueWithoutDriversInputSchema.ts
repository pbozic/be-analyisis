import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driver_municipalitiesWhereUniqueInputSchema } from './driver_municipalitiesWhereUniqueInputSchema';
import { driver_municipalitiesUpdateWithoutDriversInputSchema } from './driver_municipalitiesUpdateWithoutDriversInputSchema';
import { driver_municipalitiesUncheckedUpdateWithoutDriversInputSchema } from './driver_municipalitiesUncheckedUpdateWithoutDriversInputSchema';

export const driver_municipalitiesUpdateWithWhereUniqueWithoutDriversInputSchema: z.ZodType<Prisma.driver_municipalitiesUpdateWithWhereUniqueWithoutDriversInput> = z.object({
  where: z.lazy(() => driver_municipalitiesWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => driver_municipalitiesUpdateWithoutDriversInputSchema),z.lazy(() => driver_municipalitiesUncheckedUpdateWithoutDriversInputSchema) ]),
}).strict();

export default driver_municipalitiesUpdateWithWhereUniqueWithoutDriversInputSchema;
