import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { weather_dataScalarWhereInputSchema } from './weather_dataScalarWhereInputSchema';
import { weather_dataUpdateManyMutationInputSchema } from './weather_dataUpdateManyMutationInputSchema';
import { weather_dataUncheckedUpdateManyWithoutSettlementInputSchema } from './weather_dataUncheckedUpdateManyWithoutSettlementInputSchema';

export const weather_dataUpdateManyWithWhereWithoutSettlementInputSchema: z.ZodType<Prisma.weather_dataUpdateManyWithWhereWithoutSettlementInput> = z.object({
  where: z.lazy(() => weather_dataScalarWhereInputSchema),
  data: z.union([ z.lazy(() => weather_dataUpdateManyMutationInputSchema),z.lazy(() => weather_dataUncheckedUpdateManyWithoutSettlementInputSchema) ]),
}).strict();

export default weather_dataUpdateManyWithWhereWithoutSettlementInputSchema;
