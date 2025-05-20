import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { order_lobbiesWhereUniqueInputSchema } from './order_lobbiesWhereUniqueInputSchema';
import { order_lobbiesUpdateWithoutBusinessInputSchema } from './order_lobbiesUpdateWithoutBusinessInputSchema';
import { order_lobbiesUncheckedUpdateWithoutBusinessInputSchema } from './order_lobbiesUncheckedUpdateWithoutBusinessInputSchema';
import { order_lobbiesCreateWithoutBusinessInputSchema } from './order_lobbiesCreateWithoutBusinessInputSchema';
import { order_lobbiesUncheckedCreateWithoutBusinessInputSchema } from './order_lobbiesUncheckedCreateWithoutBusinessInputSchema';

export const order_lobbiesUpsertWithWhereUniqueWithoutBusinessInputSchema: z.ZodType<Prisma.order_lobbiesUpsertWithWhereUniqueWithoutBusinessInput> = z.object({
  where: z.lazy(() => order_lobbiesWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => order_lobbiesUpdateWithoutBusinessInputSchema),z.lazy(() => order_lobbiesUncheckedUpdateWithoutBusinessInputSchema) ]),
  create: z.union([ z.lazy(() => order_lobbiesCreateWithoutBusinessInputSchema),z.lazy(() => order_lobbiesUncheckedCreateWithoutBusinessInputSchema) ]),
}).strict();

export default order_lobbiesUpsertWithWhereUniqueWithoutBusinessInputSchema;
