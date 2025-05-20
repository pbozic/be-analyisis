import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { municipalitiesUpdateWithoutDriver_municipalitiesInputSchema } from './municipalitiesUpdateWithoutDriver_municipalitiesInputSchema';
import { municipalitiesUncheckedUpdateWithoutDriver_municipalitiesInputSchema } from './municipalitiesUncheckedUpdateWithoutDriver_municipalitiesInputSchema';
import { municipalitiesCreateWithoutDriver_municipalitiesInputSchema } from './municipalitiesCreateWithoutDriver_municipalitiesInputSchema';
import { municipalitiesUncheckedCreateWithoutDriver_municipalitiesInputSchema } from './municipalitiesUncheckedCreateWithoutDriver_municipalitiesInputSchema';
import { municipalitiesWhereInputSchema } from './municipalitiesWhereInputSchema';

export const municipalitiesUpsertWithoutDriver_municipalitiesInputSchema: z.ZodType<Prisma.municipalitiesUpsertWithoutDriver_municipalitiesInput> = z.object({
  update: z.union([ z.lazy(() => municipalitiesUpdateWithoutDriver_municipalitiesInputSchema),z.lazy(() => municipalitiesUncheckedUpdateWithoutDriver_municipalitiesInputSchema) ]),
  create: z.union([ z.lazy(() => municipalitiesCreateWithoutDriver_municipalitiesInputSchema),z.lazy(() => municipalitiesUncheckedCreateWithoutDriver_municipalitiesInputSchema) ]),
  where: z.lazy(() => municipalitiesWhereInputSchema).optional()
}).strict();

export default municipalitiesUpsertWithoutDriver_municipalitiesInputSchema;
