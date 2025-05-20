import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { weather_dataScalarWhereInputSchema } from './weather_dataScalarWhereInputSchema';
import { weather_dataUpdateManyMutationInputSchema } from './weather_dataUpdateManyMutationInputSchema';
import { weather_dataUncheckedUpdateManyWithoutMunicipalityInputSchema } from './weather_dataUncheckedUpdateManyWithoutMunicipalityInputSchema';

export const weather_dataUpdateManyWithWhereWithoutMunicipalityInputSchema: z.ZodType<Prisma.weather_dataUpdateManyWithWhereWithoutMunicipalityInput> = z.object({
  where: z.lazy(() => weather_dataScalarWhereInputSchema),
  data: z.union([ z.lazy(() => weather_dataUpdateManyMutationInputSchema),z.lazy(() => weather_dataUncheckedUpdateManyWithoutMunicipalityInputSchema) ]),
}).strict();

export default weather_dataUpdateManyWithWhereWithoutMunicipalityInputSchema;
