import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { allowancesUpdateWithoutUserInputSchema } from './allowancesUpdateWithoutUserInputSchema';
import { allowancesUncheckedUpdateWithoutUserInputSchema } from './allowancesUncheckedUpdateWithoutUserInputSchema';
import { allowancesCreateWithoutUserInputSchema } from './allowancesCreateWithoutUserInputSchema';
import { allowancesUncheckedCreateWithoutUserInputSchema } from './allowancesUncheckedCreateWithoutUserInputSchema';
import { allowancesWhereInputSchema } from './allowancesWhereInputSchema';

export const allowancesUpsertWithoutUserInputSchema: z.ZodType<Prisma.allowancesUpsertWithoutUserInput> = z.object({
  update: z.union([ z.lazy(() => allowancesUpdateWithoutUserInputSchema),z.lazy(() => allowancesUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => allowancesCreateWithoutUserInputSchema),z.lazy(() => allowancesUncheckedCreateWithoutUserInputSchema) ]),
  where: z.lazy(() => allowancesWhereInputSchema).optional()
}).strict();

export default allowancesUpsertWithoutUserInputSchema;
