import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessUpdateWithoutDaily_meal_driversInputSchema } from './businessUpdateWithoutDaily_meal_driversInputSchema';
import { businessUncheckedUpdateWithoutDaily_meal_driversInputSchema } from './businessUncheckedUpdateWithoutDaily_meal_driversInputSchema';
import { businessCreateWithoutDaily_meal_driversInputSchema } from './businessCreateWithoutDaily_meal_driversInputSchema';
import { businessUncheckedCreateWithoutDaily_meal_driversInputSchema } from './businessUncheckedCreateWithoutDaily_meal_driversInputSchema';
import { businessWhereInputSchema } from './businessWhereInputSchema';

export const businessUpsertWithoutDaily_meal_driversInputSchema: z.ZodType<Prisma.businessUpsertWithoutDaily_meal_driversInput> = z.object({
  update: z.union([ z.lazy(() => businessUpdateWithoutDaily_meal_driversInputSchema),z.lazy(() => businessUncheckedUpdateWithoutDaily_meal_driversInputSchema) ]),
  create: z.union([ z.lazy(() => businessCreateWithoutDaily_meal_driversInputSchema),z.lazy(() => businessUncheckedCreateWithoutDaily_meal_driversInputSchema) ]),
  where: z.lazy(() => businessWhereInputSchema).optional()
}).strict();

export default businessUpsertWithoutDaily_meal_driversInputSchema;
