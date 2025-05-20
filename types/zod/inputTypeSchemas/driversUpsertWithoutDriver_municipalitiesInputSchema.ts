import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driversUpdateWithoutDriver_municipalitiesInputSchema } from './driversUpdateWithoutDriver_municipalitiesInputSchema';
import { driversUncheckedUpdateWithoutDriver_municipalitiesInputSchema } from './driversUncheckedUpdateWithoutDriver_municipalitiesInputSchema';
import { driversCreateWithoutDriver_municipalitiesInputSchema } from './driversCreateWithoutDriver_municipalitiesInputSchema';
import { driversUncheckedCreateWithoutDriver_municipalitiesInputSchema } from './driversUncheckedCreateWithoutDriver_municipalitiesInputSchema';
import { driversWhereInputSchema } from './driversWhereInputSchema';

export const driversUpsertWithoutDriver_municipalitiesInputSchema: z.ZodType<Prisma.driversUpsertWithoutDriver_municipalitiesInput> = z.object({
  update: z.union([ z.lazy(() => driversUpdateWithoutDriver_municipalitiesInputSchema),z.lazy(() => driversUncheckedUpdateWithoutDriver_municipalitiesInputSchema) ]),
  create: z.union([ z.lazy(() => driversCreateWithoutDriver_municipalitiesInputSchema),z.lazy(() => driversUncheckedCreateWithoutDriver_municipalitiesInputSchema) ]),
  where: z.lazy(() => driversWhereInputSchema).optional()
}).strict();

export default driversUpsertWithoutDriver_municipalitiesInputSchema;
