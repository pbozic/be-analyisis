import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersCreateWithoutBusinessInputSchema } from './delivery_ordersCreateWithoutBusinessInputSchema';
import { delivery_ordersUncheckedCreateWithoutBusinessInputSchema } from './delivery_ordersUncheckedCreateWithoutBusinessInputSchema';
import { delivery_ordersCreateOrConnectWithoutBusinessInputSchema } from './delivery_ordersCreateOrConnectWithoutBusinessInputSchema';
import { delivery_ordersCreateManyBusinessInputEnvelopeSchema } from './delivery_ordersCreateManyBusinessInputEnvelopeSchema';
import { delivery_ordersWhereUniqueInputSchema } from './delivery_ordersWhereUniqueInputSchema';

export const delivery_ordersCreateNestedManyWithoutBusinessInputSchema: z.ZodType<Prisma.delivery_ordersCreateNestedManyWithoutBusinessInput> = z.object({
  create: z.union([ z.lazy(() => delivery_ordersCreateWithoutBusinessInputSchema),z.lazy(() => delivery_ordersCreateWithoutBusinessInputSchema).array(),z.lazy(() => delivery_ordersUncheckedCreateWithoutBusinessInputSchema),z.lazy(() => delivery_ordersUncheckedCreateWithoutBusinessInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => delivery_ordersCreateOrConnectWithoutBusinessInputSchema),z.lazy(() => delivery_ordersCreateOrConnectWithoutBusinessInputSchema).array() ]).optional(),
  createMany: z.lazy(() => delivery_ordersCreateManyBusinessInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => delivery_ordersWhereUniqueInputSchema),z.lazy(() => delivery_ordersWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default delivery_ordersCreateNestedManyWithoutBusinessInputSchema;
