import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { allowancesWhereInputSchema } from './allowancesWhereInputSchema';
import { allowancesUpdateWithoutUserInputSchema } from './allowancesUpdateWithoutUserInputSchema';
import { allowancesUncheckedUpdateWithoutUserInputSchema } from './allowancesUncheckedUpdateWithoutUserInputSchema';

export const allowancesUpdateToOneWithWhereWithoutUserInputSchema: z.ZodType<Prisma.allowancesUpdateToOneWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => allowancesWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => allowancesUpdateWithoutUserInputSchema),z.lazy(() => allowancesUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export default allowancesUpdateToOneWithWhereWithoutUserInputSchema;
