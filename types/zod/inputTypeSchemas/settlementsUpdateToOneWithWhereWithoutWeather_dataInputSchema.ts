import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { settlementsWhereInputSchema } from './settlementsWhereInputSchema';
import { settlementsUpdateWithoutWeather_dataInputSchema } from './settlementsUpdateWithoutWeather_dataInputSchema';
import { settlementsUncheckedUpdateWithoutWeather_dataInputSchema } from './settlementsUncheckedUpdateWithoutWeather_dataInputSchema';

export const settlementsUpdateToOneWithWhereWithoutWeather_dataInputSchema: z.ZodType<Prisma.settlementsUpdateToOneWithWhereWithoutWeather_dataInput> = z.object({
  where: z.lazy(() => settlementsWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => settlementsUpdateWithoutWeather_dataInputSchema),z.lazy(() => settlementsUncheckedUpdateWithoutWeather_dataInputSchema) ]),
}).strict();

export default settlementsUpdateToOneWithWhereWithoutWeather_dataInputSchema;
