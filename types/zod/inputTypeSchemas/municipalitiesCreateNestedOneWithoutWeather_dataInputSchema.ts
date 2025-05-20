import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { municipalitiesCreateWithoutWeather_dataInputSchema } from './municipalitiesCreateWithoutWeather_dataInputSchema';
import { municipalitiesUncheckedCreateWithoutWeather_dataInputSchema } from './municipalitiesUncheckedCreateWithoutWeather_dataInputSchema';
import { municipalitiesCreateOrConnectWithoutWeather_dataInputSchema } from './municipalitiesCreateOrConnectWithoutWeather_dataInputSchema';
import { municipalitiesWhereUniqueInputSchema } from './municipalitiesWhereUniqueInputSchema';

export const municipalitiesCreateNestedOneWithoutWeather_dataInputSchema: z.ZodType<Prisma.municipalitiesCreateNestedOneWithoutWeather_dataInput> = z.object({
  create: z.union([ z.lazy(() => municipalitiesCreateWithoutWeather_dataInputSchema),z.lazy(() => municipalitiesUncheckedCreateWithoutWeather_dataInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => municipalitiesCreateOrConnectWithoutWeather_dataInputSchema).optional(),
  connect: z.lazy(() => municipalitiesWhereUniqueInputSchema).optional()
}).strict();

export default municipalitiesCreateNestedOneWithoutWeather_dataInputSchema;
