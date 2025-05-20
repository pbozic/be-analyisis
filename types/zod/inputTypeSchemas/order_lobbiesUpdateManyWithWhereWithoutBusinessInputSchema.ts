import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { order_lobbiesScalarWhereInputSchema } from './order_lobbiesScalarWhereInputSchema';
import { order_lobbiesUpdateManyMutationInputSchema } from './order_lobbiesUpdateManyMutationInputSchema';
import { order_lobbiesUncheckedUpdateManyWithoutBusinessInputSchema } from './order_lobbiesUncheckedUpdateManyWithoutBusinessInputSchema';

export const order_lobbiesUpdateManyWithWhereWithoutBusinessInputSchema: z.ZodType<Prisma.order_lobbiesUpdateManyWithWhereWithoutBusinessInput> = z.object({
  where: z.lazy(() => order_lobbiesScalarWhereInputSchema),
  data: z.union([ z.lazy(() => order_lobbiesUpdateManyMutationInputSchema),z.lazy(() => order_lobbiesUncheckedUpdateManyWithoutBusinessInputSchema) ]),
}).strict();

export default order_lobbiesUpdateManyWithWhereWithoutBusinessInputSchema;
