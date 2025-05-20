import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { vehiclesCreateWithoutDelivery_ordersInputSchema } from './vehiclesCreateWithoutDelivery_ordersInputSchema';
import { vehiclesUncheckedCreateWithoutDelivery_ordersInputSchema } from './vehiclesUncheckedCreateWithoutDelivery_ordersInputSchema';
import { vehiclesCreateOrConnectWithoutDelivery_ordersInputSchema } from './vehiclesCreateOrConnectWithoutDelivery_ordersInputSchema';
import { vehiclesUpsertWithoutDelivery_ordersInputSchema } from './vehiclesUpsertWithoutDelivery_ordersInputSchema';
import { vehiclesWhereInputSchema } from './vehiclesWhereInputSchema';
import { vehiclesWhereUniqueInputSchema } from './vehiclesWhereUniqueInputSchema';
import { vehiclesUpdateToOneWithWhereWithoutDelivery_ordersInputSchema } from './vehiclesUpdateToOneWithWhereWithoutDelivery_ordersInputSchema';
import { vehiclesUpdateWithoutDelivery_ordersInputSchema } from './vehiclesUpdateWithoutDelivery_ordersInputSchema';
import { vehiclesUncheckedUpdateWithoutDelivery_ordersInputSchema } from './vehiclesUncheckedUpdateWithoutDelivery_ordersInputSchema';

export const vehiclesUpdateOneWithoutDelivery_ordersNestedInputSchema: z.ZodType<Prisma.vehiclesUpdateOneWithoutDelivery_ordersNestedInput> = z.object({
  create: z.union([ z.lazy(() => vehiclesCreateWithoutDelivery_ordersInputSchema),z.lazy(() => vehiclesUncheckedCreateWithoutDelivery_ordersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => vehiclesCreateOrConnectWithoutDelivery_ordersInputSchema).optional(),
  upsert: z.lazy(() => vehiclesUpsertWithoutDelivery_ordersInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => vehiclesWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => vehiclesWhereInputSchema) ]).optional(),
  connect: z.lazy(() => vehiclesWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => vehiclesUpdateToOneWithWhereWithoutDelivery_ordersInputSchema),z.lazy(() => vehiclesUpdateWithoutDelivery_ordersInputSchema),z.lazy(() => vehiclesUncheckedUpdateWithoutDelivery_ordersInputSchema) ]).optional(),
}).strict();

export default vehiclesUpdateOneWithoutDelivery_ordersNestedInputSchema;
