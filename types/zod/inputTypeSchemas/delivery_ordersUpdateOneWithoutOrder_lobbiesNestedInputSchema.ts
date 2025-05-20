import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersCreateWithoutOrder_lobbiesInputSchema } from './delivery_ordersCreateWithoutOrder_lobbiesInputSchema';
import { delivery_ordersUncheckedCreateWithoutOrder_lobbiesInputSchema } from './delivery_ordersUncheckedCreateWithoutOrder_lobbiesInputSchema';
import { delivery_ordersCreateOrConnectWithoutOrder_lobbiesInputSchema } from './delivery_ordersCreateOrConnectWithoutOrder_lobbiesInputSchema';
import { delivery_ordersUpsertWithoutOrder_lobbiesInputSchema } from './delivery_ordersUpsertWithoutOrder_lobbiesInputSchema';
import { delivery_ordersWhereInputSchema } from './delivery_ordersWhereInputSchema';
import { delivery_ordersWhereUniqueInputSchema } from './delivery_ordersWhereUniqueInputSchema';
import { delivery_ordersUpdateToOneWithWhereWithoutOrder_lobbiesInputSchema } from './delivery_ordersUpdateToOneWithWhereWithoutOrder_lobbiesInputSchema';
import { delivery_ordersUpdateWithoutOrder_lobbiesInputSchema } from './delivery_ordersUpdateWithoutOrder_lobbiesInputSchema';
import { delivery_ordersUncheckedUpdateWithoutOrder_lobbiesInputSchema } from './delivery_ordersUncheckedUpdateWithoutOrder_lobbiesInputSchema';

export const delivery_ordersUpdateOneWithoutOrder_lobbiesNestedInputSchema: z.ZodType<Prisma.delivery_ordersUpdateOneWithoutOrder_lobbiesNestedInput> = z.object({
  create: z.union([ z.lazy(() => delivery_ordersCreateWithoutOrder_lobbiesInputSchema),z.lazy(() => delivery_ordersUncheckedCreateWithoutOrder_lobbiesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => delivery_ordersCreateOrConnectWithoutOrder_lobbiesInputSchema).optional(),
  upsert: z.lazy(() => delivery_ordersUpsertWithoutOrder_lobbiesInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => delivery_ordersWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => delivery_ordersWhereInputSchema) ]).optional(),
  connect: z.lazy(() => delivery_ordersWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => delivery_ordersUpdateToOneWithWhereWithoutOrder_lobbiesInputSchema),z.lazy(() => delivery_ordersUpdateWithoutOrder_lobbiesInputSchema),z.lazy(() => delivery_ordersUncheckedUpdateWithoutOrder_lobbiesInputSchema) ]).optional(),
}).strict();

export default delivery_ordersUpdateOneWithoutOrder_lobbiesNestedInputSchema;
