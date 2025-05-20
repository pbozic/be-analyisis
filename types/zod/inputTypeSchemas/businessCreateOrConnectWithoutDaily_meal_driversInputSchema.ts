import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';
import { businessCreateWithoutDaily_meal_driversInputSchema } from './businessCreateWithoutDaily_meal_driversInputSchema';
import { businessUncheckedCreateWithoutDaily_meal_driversInputSchema } from './businessUncheckedCreateWithoutDaily_meal_driversInputSchema';

export const businessCreateOrConnectWithoutDaily_meal_driversInputSchema: z.ZodType<Prisma.businessCreateOrConnectWithoutDaily_meal_driversInput> = z.object({
  where: z.lazy(() => businessWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => businessCreateWithoutDaily_meal_driversInputSchema),z.lazy(() => businessUncheckedCreateWithoutDaily_meal_driversInputSchema) ]),
}).strict();

export default businessCreateOrConnectWithoutDaily_meal_driversInputSchema;
