import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { business_usersWhereUniqueInputSchema } from './business_usersWhereUniqueInputSchema';
import { business_usersCreateWithoutTaxi_ordersInputSchema } from './business_usersCreateWithoutTaxi_ordersInputSchema';
import { business_usersUncheckedCreateWithoutTaxi_ordersInputSchema } from './business_usersUncheckedCreateWithoutTaxi_ordersInputSchema';

export const business_usersCreateOrConnectWithoutTaxi_ordersInputSchema: z.ZodType<Prisma.business_usersCreateOrConnectWithoutTaxi_ordersInput> = z.object({
  where: z.lazy(() => business_usersWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => business_usersCreateWithoutTaxi_ordersInputSchema),z.lazy(() => business_usersUncheckedCreateWithoutTaxi_ordersInputSchema) ]),
}).strict();

export default business_usersCreateOrConnectWithoutTaxi_ordersInputSchema;
