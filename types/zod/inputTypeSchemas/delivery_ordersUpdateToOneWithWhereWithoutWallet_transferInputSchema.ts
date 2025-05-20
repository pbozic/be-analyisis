import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersWhereInputSchema } from './delivery_ordersWhereInputSchema';
import { delivery_ordersUpdateWithoutWallet_transferInputSchema } from './delivery_ordersUpdateWithoutWallet_transferInputSchema';
import { delivery_ordersUncheckedUpdateWithoutWallet_transferInputSchema } from './delivery_ordersUncheckedUpdateWithoutWallet_transferInputSchema';

export const delivery_ordersUpdateToOneWithWhereWithoutWallet_transferInputSchema: z.ZodType<Prisma.delivery_ordersUpdateToOneWithWhereWithoutWallet_transferInput> = z.object({
  where: z.lazy(() => delivery_ordersWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => delivery_ordersUpdateWithoutWallet_transferInputSchema),z.lazy(() => delivery_ordersUncheckedUpdateWithoutWallet_transferInputSchema) ]),
}).strict();

export default delivery_ordersUpdateToOneWithWhereWithoutWallet_transferInputSchema;
