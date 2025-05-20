import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { municipalitiesWhereInputSchema } from './municipalitiesWhereInputSchema';
import { municipalitiesUpdateWithoutWeather_dataInputSchema } from './municipalitiesUpdateWithoutWeather_dataInputSchema';
import { municipalitiesUncheckedUpdateWithoutWeather_dataInputSchema } from './municipalitiesUncheckedUpdateWithoutWeather_dataInputSchema';

export const municipalitiesUpdateToOneWithWhereWithoutWeather_dataInputSchema: z.ZodType<Prisma.municipalitiesUpdateToOneWithWhereWithoutWeather_dataInput> = z.object({
  where: z.lazy(() => municipalitiesWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => municipalitiesUpdateWithoutWeather_dataInputSchema),z.lazy(() => municipalitiesUncheckedUpdateWithoutWeather_dataInputSchema) ]),
}).strict();

export default municipalitiesUpdateToOneWithWhereWithoutWeather_dataInputSchema;
