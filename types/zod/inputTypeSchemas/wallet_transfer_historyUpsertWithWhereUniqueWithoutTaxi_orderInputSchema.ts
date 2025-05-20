import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { wallet_transfer_historyWhereUniqueInputSchema } from './wallet_transfer_historyWhereUniqueInputSchema';
import { wallet_transfer_historyUpdateWithoutTaxi_orderInputSchema } from './wallet_transfer_historyUpdateWithoutTaxi_orderInputSchema';
import { wallet_transfer_historyUncheckedUpdateWithoutTaxi_orderInputSchema } from './wallet_transfer_historyUncheckedUpdateWithoutTaxi_orderInputSchema';
import { wallet_transfer_historyCreateWithoutTaxi_orderInputSchema } from './wallet_transfer_historyCreateWithoutTaxi_orderInputSchema';
import { wallet_transfer_historyUncheckedCreateWithoutTaxi_orderInputSchema } from './wallet_transfer_historyUncheckedCreateWithoutTaxi_orderInputSchema';

export const wallet_transfer_historyUpsertWithWhereUniqueWithoutTaxi_orderInputSchema: z.ZodType<Prisma.wallet_transfer_historyUpsertWithWhereUniqueWithoutTaxi_orderInput> = z.object({
  where: z.lazy(() => wallet_transfer_historyWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => wallet_transfer_historyUpdateWithoutTaxi_orderInputSchema),z.lazy(() => wallet_transfer_historyUncheckedUpdateWithoutTaxi_orderInputSchema) ]),
  create: z.union([ z.lazy(() => wallet_transfer_historyCreateWithoutTaxi_orderInputSchema),z.lazy(() => wallet_transfer_historyUncheckedCreateWithoutTaxi_orderInputSchema) ]),
}).strict();

export default wallet_transfer_historyUpsertWithWhereUniqueWithoutTaxi_orderInputSchema;
