import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { weather_dataWhereUniqueInputSchema } from './weather_dataWhereUniqueInputSchema';
import { weather_dataUpdateWithoutSettlementInputSchema } from './weather_dataUpdateWithoutSettlementInputSchema';
import { weather_dataUncheckedUpdateWithoutSettlementInputSchema } from './weather_dataUncheckedUpdateWithoutSettlementInputSchema';

export const weather_dataUpdateWithWhereUniqueWithoutSettlementInputSchema: z.ZodType<Prisma.weather_dataUpdateWithWhereUniqueWithoutSettlementInput> = z.object({
  where: z.lazy(() => weather_dataWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => weather_dataUpdateWithoutSettlementInputSchema),z.lazy(() => weather_dataUncheckedUpdateWithoutSettlementInputSchema) ]),
}).strict();

export default weather_dataUpdateWithWhereUniqueWithoutSettlementInputSchema;
