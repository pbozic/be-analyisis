import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessCreateWithoutBusiness_order_lobbiesInputSchema } from './businessCreateWithoutBusiness_order_lobbiesInputSchema';
import { businessUncheckedCreateWithoutBusiness_order_lobbiesInputSchema } from './businessUncheckedCreateWithoutBusiness_order_lobbiesInputSchema';
import { businessCreateOrConnectWithoutBusiness_order_lobbiesInputSchema } from './businessCreateOrConnectWithoutBusiness_order_lobbiesInputSchema';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';

export const businessCreateNestedOneWithoutBusiness_order_lobbiesInputSchema: z.ZodType<Prisma.businessCreateNestedOneWithoutBusiness_order_lobbiesInput> = z.object({
  create: z.union([ z.lazy(() => businessCreateWithoutBusiness_order_lobbiesInputSchema),z.lazy(() => businessUncheckedCreateWithoutBusiness_order_lobbiesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => businessCreateOrConnectWithoutBusiness_order_lobbiesInputSchema).optional(),
  connect: z.lazy(() => businessWhereUniqueInputSchema).optional()
}).strict();

export default businessCreateNestedOneWithoutBusiness_order_lobbiesInputSchema;
