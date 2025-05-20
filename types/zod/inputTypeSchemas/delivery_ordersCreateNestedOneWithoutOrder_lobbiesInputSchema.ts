import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersCreateWithoutOrder_lobbiesInputSchema } from './delivery_ordersCreateWithoutOrder_lobbiesInputSchema';
import { delivery_ordersUncheckedCreateWithoutOrder_lobbiesInputSchema } from './delivery_ordersUncheckedCreateWithoutOrder_lobbiesInputSchema';
import { delivery_ordersCreateOrConnectWithoutOrder_lobbiesInputSchema } from './delivery_ordersCreateOrConnectWithoutOrder_lobbiesInputSchema';
import { delivery_ordersWhereUniqueInputSchema } from './delivery_ordersWhereUniqueInputSchema';

export const delivery_ordersCreateNestedOneWithoutOrder_lobbiesInputSchema: z.ZodType<Prisma.delivery_ordersCreateNestedOneWithoutOrder_lobbiesInput> = z.object({
  create: z.union([ z.lazy(() => delivery_ordersCreateWithoutOrder_lobbiesInputSchema),z.lazy(() => delivery_ordersUncheckedCreateWithoutOrder_lobbiesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => delivery_ordersCreateOrConnectWithoutOrder_lobbiesInputSchema).optional(),
  connect: z.lazy(() => delivery_ordersWhereUniqueInputSchema).optional()
}).strict();

export default delivery_ordersCreateNestedOneWithoutOrder_lobbiesInputSchema;
