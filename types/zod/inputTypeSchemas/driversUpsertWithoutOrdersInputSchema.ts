import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driversUpdateWithoutOrdersInputSchema } from './driversUpdateWithoutOrdersInputSchema';
import { driversUncheckedUpdateWithoutOrdersInputSchema } from './driversUncheckedUpdateWithoutOrdersInputSchema';
import { driversCreateWithoutOrdersInputSchema } from './driversCreateWithoutOrdersInputSchema';
import { driversUncheckedCreateWithoutOrdersInputSchema } from './driversUncheckedCreateWithoutOrdersInputSchema';
import { driversWhereInputSchema } from './driversWhereInputSchema';

export const driversUpsertWithoutOrdersInputSchema: z.ZodType<Prisma.driversUpsertWithoutOrdersInput> = z.object({
  update: z.union([ z.lazy(() => driversUpdateWithoutOrdersInputSchema),z.lazy(() => driversUncheckedUpdateWithoutOrdersInputSchema) ]),
  create: z.union([ z.lazy(() => driversCreateWithoutOrdersInputSchema),z.lazy(() => driversUncheckedCreateWithoutOrdersInputSchema) ]),
  where: z.lazy(() => driversWhereInputSchema).optional()
}).strict();

export default driversUpsertWithoutOrdersInputSchema;
