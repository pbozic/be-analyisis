import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersWhereUniqueInputSchema } from './delivery_ordersWhereUniqueInputSchema';
import { delivery_ordersUpdateWithoutBusinessInputSchema } from './delivery_ordersUpdateWithoutBusinessInputSchema';
import { delivery_ordersUncheckedUpdateWithoutBusinessInputSchema } from './delivery_ordersUncheckedUpdateWithoutBusinessInputSchema';
import { delivery_ordersCreateWithoutBusinessInputSchema } from './delivery_ordersCreateWithoutBusinessInputSchema';
import { delivery_ordersUncheckedCreateWithoutBusinessInputSchema } from './delivery_ordersUncheckedCreateWithoutBusinessInputSchema';

export const delivery_ordersUpsertWithWhereUniqueWithoutBusinessInputSchema: z.ZodType<Prisma.delivery_ordersUpsertWithWhereUniqueWithoutBusinessInput> = z.object({
  where: z.lazy(() => delivery_ordersWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => delivery_ordersUpdateWithoutBusinessInputSchema),z.lazy(() => delivery_ordersUncheckedUpdateWithoutBusinessInputSchema) ]),
  create: z.union([ z.lazy(() => delivery_ordersCreateWithoutBusinessInputSchema),z.lazy(() => delivery_ordersUncheckedCreateWithoutBusinessInputSchema) ]),
}).strict();

export default delivery_ordersUpsertWithWhereUniqueWithoutBusinessInputSchema;
