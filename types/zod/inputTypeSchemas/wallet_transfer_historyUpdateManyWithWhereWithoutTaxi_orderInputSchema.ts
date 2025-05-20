import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { wallet_transfer_historyScalarWhereInputSchema } from './wallet_transfer_historyScalarWhereInputSchema';
import { wallet_transfer_historyUpdateManyMutationInputSchema } from './wallet_transfer_historyUpdateManyMutationInputSchema';
import { wallet_transfer_historyUncheckedUpdateManyWithoutTaxi_orderInputSchema } from './wallet_transfer_historyUncheckedUpdateManyWithoutTaxi_orderInputSchema';

export const wallet_transfer_historyUpdateManyWithWhereWithoutTaxi_orderInputSchema: z.ZodType<Prisma.wallet_transfer_historyUpdateManyWithWhereWithoutTaxi_orderInput> = z.object({
  where: z.lazy(() => wallet_transfer_historyScalarWhereInputSchema),
  data: z.union([ z.lazy(() => wallet_transfer_historyUpdateManyMutationInputSchema),z.lazy(() => wallet_transfer_historyUncheckedUpdateManyWithoutTaxi_orderInputSchema) ]),
}).strict();

export default wallet_transfer_historyUpdateManyWithWhereWithoutTaxi_orderInputSchema;
