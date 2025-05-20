import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';
import { businessCreateWithoutBusiness_order_lobbiesInputSchema } from './businessCreateWithoutBusiness_order_lobbiesInputSchema';
import { businessUncheckedCreateWithoutBusiness_order_lobbiesInputSchema } from './businessUncheckedCreateWithoutBusiness_order_lobbiesInputSchema';

export const businessCreateOrConnectWithoutBusiness_order_lobbiesInputSchema: z.ZodType<Prisma.businessCreateOrConnectWithoutBusiness_order_lobbiesInput> = z.object({
  where: z.lazy(() => businessWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => businessCreateWithoutBusiness_order_lobbiesInputSchema),z.lazy(() => businessUncheckedCreateWithoutBusiness_order_lobbiesInputSchema) ]),
}).strict();

export default businessCreateOrConnectWithoutBusiness_order_lobbiesInputSchema;
