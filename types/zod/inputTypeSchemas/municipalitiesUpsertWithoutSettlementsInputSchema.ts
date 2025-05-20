import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { municipalitiesUpdateWithoutSettlementsInputSchema } from './municipalitiesUpdateWithoutSettlementsInputSchema';
import { municipalitiesUncheckedUpdateWithoutSettlementsInputSchema } from './municipalitiesUncheckedUpdateWithoutSettlementsInputSchema';
import { municipalitiesCreateWithoutSettlementsInputSchema } from './municipalitiesCreateWithoutSettlementsInputSchema';
import { municipalitiesUncheckedCreateWithoutSettlementsInputSchema } from './municipalitiesUncheckedCreateWithoutSettlementsInputSchema';
import { municipalitiesWhereInputSchema } from './municipalitiesWhereInputSchema';

export const municipalitiesUpsertWithoutSettlementsInputSchema: z.ZodType<Prisma.municipalitiesUpsertWithoutSettlementsInput> = z.object({
  update: z.union([ z.lazy(() => municipalitiesUpdateWithoutSettlementsInputSchema),z.lazy(() => municipalitiesUncheckedUpdateWithoutSettlementsInputSchema) ]),
  create: z.union([ z.lazy(() => municipalitiesCreateWithoutSettlementsInputSchema),z.lazy(() => municipalitiesUncheckedCreateWithoutSettlementsInputSchema) ]),
  where: z.lazy(() => municipalitiesWhereInputSchema).optional()
}).strict();

export default municipalitiesUpsertWithoutSettlementsInputSchema;
