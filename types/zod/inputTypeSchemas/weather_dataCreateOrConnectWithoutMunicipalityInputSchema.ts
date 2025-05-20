import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { weather_dataWhereUniqueInputSchema } from './weather_dataWhereUniqueInputSchema';
import { weather_dataCreateWithoutMunicipalityInputSchema } from './weather_dataCreateWithoutMunicipalityInputSchema';
import { weather_dataUncheckedCreateWithoutMunicipalityInputSchema } from './weather_dataUncheckedCreateWithoutMunicipalityInputSchema';

export const weather_dataCreateOrConnectWithoutMunicipalityInputSchema: z.ZodType<Prisma.weather_dataCreateOrConnectWithoutMunicipalityInput> = z.object({
  where: z.lazy(() => weather_dataWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => weather_dataCreateWithoutMunicipalityInputSchema),z.lazy(() => weather_dataUncheckedCreateWithoutMunicipalityInputSchema) ]),
}).strict();

export default weather_dataCreateOrConnectWithoutMunicipalityInputSchema;
