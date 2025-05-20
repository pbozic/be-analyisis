import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersWhereUniqueInputSchema } from './delivery_ordersWhereUniqueInputSchema';
import { delivery_ordersUpdateWithoutUserInputSchema } from './delivery_ordersUpdateWithoutUserInputSchema';
import { delivery_ordersUncheckedUpdateWithoutUserInputSchema } from './delivery_ordersUncheckedUpdateWithoutUserInputSchema';

export const delivery_ordersUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.delivery_ordersUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => delivery_ordersWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => delivery_ordersUpdateWithoutUserInputSchema),z.lazy(() => delivery_ordersUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export default delivery_ordersUpdateWithWhereUniqueWithoutUserInputSchema;
