import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersWhereUniqueInputSchema } from './taxi_ordersWhereUniqueInputSchema';
import { taxi_ordersUpdateWithoutUserInputSchema } from './taxi_ordersUpdateWithoutUserInputSchema';
import { taxi_ordersUncheckedUpdateWithoutUserInputSchema } from './taxi_ordersUncheckedUpdateWithoutUserInputSchema';

export const taxi_ordersUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.taxi_ordersUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => taxi_ordersWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => taxi_ordersUpdateWithoutUserInputSchema),z.lazy(() => taxi_ordersUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export default taxi_ordersUpdateWithWhereUniqueWithoutUserInputSchema;
