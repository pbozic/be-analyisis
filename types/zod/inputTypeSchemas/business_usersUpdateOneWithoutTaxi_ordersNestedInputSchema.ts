import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { business_usersCreateWithoutTaxi_ordersInputSchema } from './business_usersCreateWithoutTaxi_ordersInputSchema';
import { business_usersUncheckedCreateWithoutTaxi_ordersInputSchema } from './business_usersUncheckedCreateWithoutTaxi_ordersInputSchema';
import { business_usersCreateOrConnectWithoutTaxi_ordersInputSchema } from './business_usersCreateOrConnectWithoutTaxi_ordersInputSchema';
import { business_usersUpsertWithoutTaxi_ordersInputSchema } from './business_usersUpsertWithoutTaxi_ordersInputSchema';
import { business_usersWhereInputSchema } from './business_usersWhereInputSchema';
import { business_usersWhereUniqueInputSchema } from './business_usersWhereUniqueInputSchema';
import { business_usersUpdateToOneWithWhereWithoutTaxi_ordersInputSchema } from './business_usersUpdateToOneWithWhereWithoutTaxi_ordersInputSchema';
import { business_usersUpdateWithoutTaxi_ordersInputSchema } from './business_usersUpdateWithoutTaxi_ordersInputSchema';
import { business_usersUncheckedUpdateWithoutTaxi_ordersInputSchema } from './business_usersUncheckedUpdateWithoutTaxi_ordersInputSchema';

export const business_usersUpdateOneWithoutTaxi_ordersNestedInputSchema: z.ZodType<Prisma.business_usersUpdateOneWithoutTaxi_ordersNestedInput> = z.object({
  create: z.union([ z.lazy(() => business_usersCreateWithoutTaxi_ordersInputSchema),z.lazy(() => business_usersUncheckedCreateWithoutTaxi_ordersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => business_usersCreateOrConnectWithoutTaxi_ordersInputSchema).optional(),
  upsert: z.lazy(() => business_usersUpsertWithoutTaxi_ordersInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => business_usersWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => business_usersWhereInputSchema) ]).optional(),
  connect: z.lazy(() => business_usersWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => business_usersUpdateToOneWithWhereWithoutTaxi_ordersInputSchema),z.lazy(() => business_usersUpdateWithoutTaxi_ordersInputSchema),z.lazy(() => business_usersUncheckedUpdateWithoutTaxi_ordersInputSchema) ]).optional(),
}).strict();

export default business_usersUpdateOneWithoutTaxi_ordersNestedInputSchema;
