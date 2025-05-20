import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { weather_dataWhereUniqueInputSchema } from './weather_dataWhereUniqueInputSchema';
import { weather_dataUpdateWithoutMunicipalityInputSchema } from './weather_dataUpdateWithoutMunicipalityInputSchema';
import { weather_dataUncheckedUpdateWithoutMunicipalityInputSchema } from './weather_dataUncheckedUpdateWithoutMunicipalityInputSchema';
import { weather_dataCreateWithoutMunicipalityInputSchema } from './weather_dataCreateWithoutMunicipalityInputSchema';
import { weather_dataUncheckedCreateWithoutMunicipalityInputSchema } from './weather_dataUncheckedCreateWithoutMunicipalityInputSchema';

export const weather_dataUpsertWithWhereUniqueWithoutMunicipalityInputSchema: z.ZodType<Prisma.weather_dataUpsertWithWhereUniqueWithoutMunicipalityInput> = z.object({
  where: z.lazy(() => weather_dataWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => weather_dataUpdateWithoutMunicipalityInputSchema),z.lazy(() => weather_dataUncheckedUpdateWithoutMunicipalityInputSchema) ]),
  create: z.union([ z.lazy(() => weather_dataCreateWithoutMunicipalityInputSchema),z.lazy(() => weather_dataUncheckedCreateWithoutMunicipalityInputSchema) ]),
}).strict();

export default weather_dataUpsertWithWhereUniqueWithoutMunicipalityInputSchema;
