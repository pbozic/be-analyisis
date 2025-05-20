import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driversWhereInputSchema } from './driversWhereInputSchema';
import { driversUpdateWithoutUserInputSchema } from './driversUpdateWithoutUserInputSchema';
import { driversUncheckedUpdateWithoutUserInputSchema } from './driversUncheckedUpdateWithoutUserInputSchema';

export const driversUpdateToOneWithWhereWithoutUserInputSchema: z.ZodType<Prisma.driversUpdateToOneWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => driversWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => driversUpdateWithoutUserInputSchema),z.lazy(() => driversUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export default driversUpdateToOneWithWhereWithoutUserInputSchema;
