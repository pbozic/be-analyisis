import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersWhereUniqueInputSchema } from './taxi_ordersWhereUniqueInputSchema';
import { taxi_ordersUpdateWithoutBusiness_clientsInputSchema } from './taxi_ordersUpdateWithoutBusiness_clientsInputSchema';
import { taxi_ordersUncheckedUpdateWithoutBusiness_clientsInputSchema } from './taxi_ordersUncheckedUpdateWithoutBusiness_clientsInputSchema';

export const taxi_ordersUpdateWithWhereUniqueWithoutBusiness_clientsInputSchema: z.ZodType<Prisma.taxi_ordersUpdateWithWhereUniqueWithoutBusiness_clientsInput> = z.object({
  where: z.lazy(() => taxi_ordersWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => taxi_ordersUpdateWithoutBusiness_clientsInputSchema),z.lazy(() => taxi_ordersUncheckedUpdateWithoutBusiness_clientsInputSchema) ]),
}).strict();

export default taxi_ordersUpdateWithWhereUniqueWithoutBusiness_clientsInputSchema;
