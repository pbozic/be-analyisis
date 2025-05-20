import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_driversScalarWhereInputSchema } from './delivery_driversScalarWhereInputSchema';
import { delivery_driversUpdateManyMutationInputSchema } from './delivery_driversUpdateManyMutationInputSchema';
import { delivery_driversUncheckedUpdateManyWithoutDaily_meal_businessInputSchema } from './delivery_driversUncheckedUpdateManyWithoutDaily_meal_businessInputSchema';

export const delivery_driversUpdateManyWithWhereWithoutDaily_meal_businessInputSchema: z.ZodType<Prisma.delivery_driversUpdateManyWithWhereWithoutDaily_meal_businessInput> = z.object({
  where: z.lazy(() => delivery_driversScalarWhereInputSchema),
  data: z.union([ z.lazy(() => delivery_driversUpdateManyMutationInputSchema),z.lazy(() => delivery_driversUncheckedUpdateManyWithoutDaily_meal_businessInputSchema) ]),
}).strict();

export default delivery_driversUpdateManyWithWhereWithoutDaily_meal_businessInputSchema;
