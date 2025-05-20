import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { word_buyScalarWhereInputSchema } from './word_buyScalarWhereInputSchema';
import { word_buyUpdateManyMutationInputSchema } from './word_buyUpdateManyMutationInputSchema';
import { word_buyUncheckedUpdateManyWithoutBusinessInputSchema } from './word_buyUncheckedUpdateManyWithoutBusinessInputSchema';

export const word_buyUpdateManyWithWhereWithoutBusinessInputSchema: z.ZodType<Prisma.word_buyUpdateManyWithWhereWithoutBusinessInput> = z.object({
  where: z.lazy(() => word_buyScalarWhereInputSchema),
  data: z.union([ z.lazy(() => word_buyUpdateManyMutationInputSchema),z.lazy(() => word_buyUncheckedUpdateManyWithoutBusinessInputSchema) ]),
}).strict();

export default word_buyUpdateManyWithWhereWithoutBusinessInputSchema;
