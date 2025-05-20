import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';
import { businessCreateWithoutTaxi_ordersInputSchema } from './businessCreateWithoutTaxi_ordersInputSchema';
import { businessUncheckedCreateWithoutTaxi_ordersInputSchema } from './businessUncheckedCreateWithoutTaxi_ordersInputSchema';

export const businessCreateOrConnectWithoutTaxi_ordersInputSchema: z.ZodType<Prisma.businessCreateOrConnectWithoutTaxi_ordersInput> = z.object({
  where: z.lazy(() => businessWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => businessCreateWithoutTaxi_ordersInputSchema),z.lazy(() => businessUncheckedCreateWithoutTaxi_ordersInputSchema) ]),
}).strict();

export default businessCreateOrConnectWithoutTaxi_ordersInputSchema;
