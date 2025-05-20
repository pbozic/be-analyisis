import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessCreateWithoutDaily_meals_subscribersInputSchema } from './businessCreateWithoutDaily_meals_subscribersInputSchema';
import { businessUncheckedCreateWithoutDaily_meals_subscribersInputSchema } from './businessUncheckedCreateWithoutDaily_meals_subscribersInputSchema';
import { businessCreateOrConnectWithoutDaily_meals_subscribersInputSchema } from './businessCreateOrConnectWithoutDaily_meals_subscribersInputSchema';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';

export const businessCreateNestedOneWithoutDaily_meals_subscribersInputSchema: z.ZodType<Prisma.businessCreateNestedOneWithoutDaily_meals_subscribersInput> = z.object({
  create: z.union([ z.lazy(() => businessCreateWithoutDaily_meals_subscribersInputSchema),z.lazy(() => businessUncheckedCreateWithoutDaily_meals_subscribersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => businessCreateOrConnectWithoutDaily_meals_subscribersInputSchema).optional(),
  connect: z.lazy(() => businessWhereUniqueInputSchema).optional()
}).strict();

export default businessCreateNestedOneWithoutDaily_meals_subscribersInputSchema;
