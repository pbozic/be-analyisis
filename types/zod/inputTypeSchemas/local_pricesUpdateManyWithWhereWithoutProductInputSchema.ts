import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { local_pricesScalarWhereInputSchema } from './local_pricesScalarWhereInputSchema';
import { local_pricesUpdateManyMutationInputSchema } from './local_pricesUpdateManyMutationInputSchema';
import { local_pricesUncheckedUpdateManyWithoutProductInputSchema } from './local_pricesUncheckedUpdateManyWithoutProductInputSchema';

export const local_pricesUpdateManyWithWhereWithoutProductInputSchema: z.ZodType<Prisma.local_pricesUpdateManyWithWhereWithoutProductInput> = z.object({
  where: z.lazy(() => local_pricesScalarWhereInputSchema),
  data: z.union([ z.lazy(() => local_pricesUpdateManyMutationInputSchema),z.lazy(() => local_pricesUncheckedUpdateManyWithoutProductInputSchema) ]),
}).strict();

export default local_pricesUpdateManyWithWhereWithoutProductInputSchema;
