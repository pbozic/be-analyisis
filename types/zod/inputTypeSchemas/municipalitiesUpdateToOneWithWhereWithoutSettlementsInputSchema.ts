import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { municipalitiesWhereInputSchema } from './municipalitiesWhereInputSchema';
import { municipalitiesUpdateWithoutSettlementsInputSchema } from './municipalitiesUpdateWithoutSettlementsInputSchema';
import { municipalitiesUncheckedUpdateWithoutSettlementsInputSchema } from './municipalitiesUncheckedUpdateWithoutSettlementsInputSchema';

export const municipalitiesUpdateToOneWithWhereWithoutSettlementsInputSchema: z.ZodType<Prisma.municipalitiesUpdateToOneWithWhereWithoutSettlementsInput> = z.object({
  where: z.lazy(() => municipalitiesWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => municipalitiesUpdateWithoutSettlementsInputSchema),z.lazy(() => municipalitiesUncheckedUpdateWithoutSettlementsInputSchema) ]),
}).strict();

export default municipalitiesUpdateToOneWithWhereWithoutSettlementsInputSchema;
