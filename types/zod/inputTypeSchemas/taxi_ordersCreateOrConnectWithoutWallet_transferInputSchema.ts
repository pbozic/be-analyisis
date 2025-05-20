import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersWhereUniqueInputSchema } from './taxi_ordersWhereUniqueInputSchema';
import { taxi_ordersCreateWithoutWallet_transferInputSchema } from './taxi_ordersCreateWithoutWallet_transferInputSchema';
import { taxi_ordersUncheckedCreateWithoutWallet_transferInputSchema } from './taxi_ordersUncheckedCreateWithoutWallet_transferInputSchema';

export const taxi_ordersCreateOrConnectWithoutWallet_transferInputSchema: z.ZodType<Prisma.taxi_ordersCreateOrConnectWithoutWallet_transferInput> = z.object({
  where: z.lazy(() => taxi_ordersWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => taxi_ordersCreateWithoutWallet_transferInputSchema),z.lazy(() => taxi_ordersUncheckedCreateWithoutWallet_transferInputSchema) ]),
}).strict();

export default taxi_ordersCreateOrConnectWithoutWallet_transferInputSchema;
