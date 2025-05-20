import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { settlementsCreateWithoutWeather_dataInputSchema } from './settlementsCreateWithoutWeather_dataInputSchema';
import { settlementsUncheckedCreateWithoutWeather_dataInputSchema } from './settlementsUncheckedCreateWithoutWeather_dataInputSchema';
import { settlementsCreateOrConnectWithoutWeather_dataInputSchema } from './settlementsCreateOrConnectWithoutWeather_dataInputSchema';
import { settlementsWhereUniqueInputSchema } from './settlementsWhereUniqueInputSchema';

export const settlementsCreateNestedOneWithoutWeather_dataInputSchema: z.ZodType<Prisma.settlementsCreateNestedOneWithoutWeather_dataInput> = z.object({
  create: z.union([ z.lazy(() => settlementsCreateWithoutWeather_dataInputSchema),z.lazy(() => settlementsUncheckedCreateWithoutWeather_dataInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => settlementsCreateOrConnectWithoutWeather_dataInputSchema).optional(),
  connect: z.lazy(() => settlementsWhereUniqueInputSchema).optional()
}).strict();

export default settlementsCreateNestedOneWithoutWeather_dataInputSchema;
