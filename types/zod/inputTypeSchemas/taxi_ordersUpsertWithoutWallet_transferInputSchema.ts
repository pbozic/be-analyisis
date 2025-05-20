import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersUpdateWithoutWallet_transferInputSchema } from './taxi_ordersUpdateWithoutWallet_transferInputSchema';
import { taxi_ordersUncheckedUpdateWithoutWallet_transferInputSchema } from './taxi_ordersUncheckedUpdateWithoutWallet_transferInputSchema';
import { taxi_ordersCreateWithoutWallet_transferInputSchema } from './taxi_ordersCreateWithoutWallet_transferInputSchema';
import { taxi_ordersUncheckedCreateWithoutWallet_transferInputSchema } from './taxi_ordersUncheckedCreateWithoutWallet_transferInputSchema';
import { taxi_ordersWhereInputSchema } from './taxi_ordersWhereInputSchema';

export const taxi_ordersUpsertWithoutWallet_transferInputSchema: z.ZodType<Prisma.taxi_ordersUpsertWithoutWallet_transferInput> = z.object({
  update: z.union([ z.lazy(() => taxi_ordersUpdateWithoutWallet_transferInputSchema),z.lazy(() => taxi_ordersUncheckedUpdateWithoutWallet_transferInputSchema) ]),
  create: z.union([ z.lazy(() => taxi_ordersCreateWithoutWallet_transferInputSchema),z.lazy(() => taxi_ordersUncheckedCreateWithoutWallet_transferInputSchema) ]),
  where: z.lazy(() => taxi_ordersWhereInputSchema).optional()
}).strict();

export default taxi_ordersUpsertWithoutWallet_transferInputSchema;
