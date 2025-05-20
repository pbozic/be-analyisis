import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessCreateWithoutDaily_meals_subscribersInputSchema } from './businessCreateWithoutDaily_meals_subscribersInputSchema';
import { businessUncheckedCreateWithoutDaily_meals_subscribersInputSchema } from './businessUncheckedCreateWithoutDaily_meals_subscribersInputSchema';
import { businessCreateOrConnectWithoutDaily_meals_subscribersInputSchema } from './businessCreateOrConnectWithoutDaily_meals_subscribersInputSchema';
import { businessUpsertWithoutDaily_meals_subscribersInputSchema } from './businessUpsertWithoutDaily_meals_subscribersInputSchema';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';
import { businessUpdateToOneWithWhereWithoutDaily_meals_subscribersInputSchema } from './businessUpdateToOneWithWhereWithoutDaily_meals_subscribersInputSchema';
import { businessUpdateWithoutDaily_meals_subscribersInputSchema } from './businessUpdateWithoutDaily_meals_subscribersInputSchema';
import { businessUncheckedUpdateWithoutDaily_meals_subscribersInputSchema } from './businessUncheckedUpdateWithoutDaily_meals_subscribersInputSchema';

export const businessUpdateOneRequiredWithoutDaily_meals_subscribersNestedInputSchema: z.ZodType<Prisma.businessUpdateOneRequiredWithoutDaily_meals_subscribersNestedInput> = z.object({
  create: z.union([ z.lazy(() => businessCreateWithoutDaily_meals_subscribersInputSchema),z.lazy(() => businessUncheckedCreateWithoutDaily_meals_subscribersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => businessCreateOrConnectWithoutDaily_meals_subscribersInputSchema).optional(),
  upsert: z.lazy(() => businessUpsertWithoutDaily_meals_subscribersInputSchema).optional(),
  connect: z.lazy(() => businessWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => businessUpdateToOneWithWhereWithoutDaily_meals_subscribersInputSchema),z.lazy(() => businessUpdateWithoutDaily_meals_subscribersInputSchema),z.lazy(() => businessUncheckedUpdateWithoutDaily_meals_subscribersInputSchema) ]).optional(),
}).strict();

export default businessUpdateOneRequiredWithoutDaily_meals_subscribersNestedInputSchema;
