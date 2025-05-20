import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_driversWhereUniqueInputSchema } from './delivery_driversWhereUniqueInputSchema';
import { delivery_driversCreateWithoutDaily_meal_businessInputSchema } from './delivery_driversCreateWithoutDaily_meal_businessInputSchema';
import { delivery_driversUncheckedCreateWithoutDaily_meal_businessInputSchema } from './delivery_driversUncheckedCreateWithoutDaily_meal_businessInputSchema';

export const delivery_driversCreateOrConnectWithoutDaily_meal_businessInputSchema: z.ZodType<Prisma.delivery_driversCreateOrConnectWithoutDaily_meal_businessInput> = z.object({
  where: z.lazy(() => delivery_driversWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => delivery_driversCreateWithoutDaily_meal_businessInputSchema),z.lazy(() => delivery_driversUncheckedCreateWithoutDaily_meal_businessInputSchema) ]),
}).strict();

export default delivery_driversCreateOrConnectWithoutDaily_meal_businessInputSchema;
