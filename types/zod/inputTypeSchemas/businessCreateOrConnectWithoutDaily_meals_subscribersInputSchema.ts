import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';
import { businessCreateWithoutDaily_meals_subscribersInputSchema } from './businessCreateWithoutDaily_meals_subscribersInputSchema';
import { businessUncheckedCreateWithoutDaily_meals_subscribersInputSchema } from './businessUncheckedCreateWithoutDaily_meals_subscribersInputSchema';

export const businessCreateOrConnectWithoutDaily_meals_subscribersInputSchema: z.ZodType<Prisma.businessCreateOrConnectWithoutDaily_meals_subscribersInput> = z.object({
  where: z.lazy(() => businessWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => businessCreateWithoutDaily_meals_subscribersInputSchema),z.lazy(() => businessUncheckedCreateWithoutDaily_meals_subscribersInputSchema) ]),
}).strict();

export default businessCreateOrConnectWithoutDaily_meals_subscribersInputSchema;
