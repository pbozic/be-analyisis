import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driver_municipalitiesScalarWhereInputSchema } from './driver_municipalitiesScalarWhereInputSchema';
import { driver_municipalitiesUpdateManyMutationInputSchema } from './driver_municipalitiesUpdateManyMutationInputSchema';
import { driver_municipalitiesUncheckedUpdateManyWithoutDriversInputSchema } from './driver_municipalitiesUncheckedUpdateManyWithoutDriversInputSchema';

export const driver_municipalitiesUpdateManyWithWhereWithoutDriversInputSchema: z.ZodType<Prisma.driver_municipalitiesUpdateManyWithWhereWithoutDriversInput> = z.object({
  where: z.lazy(() => driver_municipalitiesScalarWhereInputSchema),
  data: z.union([ z.lazy(() => driver_municipalitiesUpdateManyMutationInputSchema),z.lazy(() => driver_municipalitiesUncheckedUpdateManyWithoutDriversInputSchema) ]),
}).strict();

export default driver_municipalitiesUpdateManyWithWhereWithoutDriversInputSchema;
