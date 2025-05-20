import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { settlementsCreateWithoutWeather_dataInputSchema } from './settlementsCreateWithoutWeather_dataInputSchema';
import { settlementsUncheckedCreateWithoutWeather_dataInputSchema } from './settlementsUncheckedCreateWithoutWeather_dataInputSchema';
import { settlementsCreateOrConnectWithoutWeather_dataInputSchema } from './settlementsCreateOrConnectWithoutWeather_dataInputSchema';
import { settlementsUpsertWithoutWeather_dataInputSchema } from './settlementsUpsertWithoutWeather_dataInputSchema';
import { settlementsWhereInputSchema } from './settlementsWhereInputSchema';
import { settlementsWhereUniqueInputSchema } from './settlementsWhereUniqueInputSchema';
import { settlementsUpdateToOneWithWhereWithoutWeather_dataInputSchema } from './settlementsUpdateToOneWithWhereWithoutWeather_dataInputSchema';
import { settlementsUpdateWithoutWeather_dataInputSchema } from './settlementsUpdateWithoutWeather_dataInputSchema';
import { settlementsUncheckedUpdateWithoutWeather_dataInputSchema } from './settlementsUncheckedUpdateWithoutWeather_dataInputSchema';

export const settlementsUpdateOneWithoutWeather_dataNestedInputSchema: z.ZodType<Prisma.settlementsUpdateOneWithoutWeather_dataNestedInput> = z.object({
  create: z.union([ z.lazy(() => settlementsCreateWithoutWeather_dataInputSchema),z.lazy(() => settlementsUncheckedCreateWithoutWeather_dataInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => settlementsCreateOrConnectWithoutWeather_dataInputSchema).optional(),
  upsert: z.lazy(() => settlementsUpsertWithoutWeather_dataInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => settlementsWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => settlementsWhereInputSchema) ]).optional(),
  connect: z.lazy(() => settlementsWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => settlementsUpdateToOneWithWhereWithoutWeather_dataInputSchema),z.lazy(() => settlementsUpdateWithoutWeather_dataInputSchema),z.lazy(() => settlementsUncheckedUpdateWithoutWeather_dataInputSchema) ]).optional(),
}).strict();

export default settlementsUpdateOneWithoutWeather_dataNestedInputSchema;
