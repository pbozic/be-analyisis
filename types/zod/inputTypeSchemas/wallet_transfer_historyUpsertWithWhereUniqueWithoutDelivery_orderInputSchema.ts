import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { wallet_transfer_historyWhereUniqueInputSchema } from './wallet_transfer_historyWhereUniqueInputSchema';
import { wallet_transfer_historyUpdateWithoutDelivery_orderInputSchema } from './wallet_transfer_historyUpdateWithoutDelivery_orderInputSchema';
import { wallet_transfer_historyUncheckedUpdateWithoutDelivery_orderInputSchema } from './wallet_transfer_historyUncheckedUpdateWithoutDelivery_orderInputSchema';
import { wallet_transfer_historyCreateWithoutDelivery_orderInputSchema } from './wallet_transfer_historyCreateWithoutDelivery_orderInputSchema';
import { wallet_transfer_historyUncheckedCreateWithoutDelivery_orderInputSchema } from './wallet_transfer_historyUncheckedCreateWithoutDelivery_orderInputSchema';

export const wallet_transfer_historyUpsertWithWhereUniqueWithoutDelivery_orderInputSchema: z.ZodType<Prisma.wallet_transfer_historyUpsertWithWhereUniqueWithoutDelivery_orderInput> = z.object({
  where: z.lazy(() => wallet_transfer_historyWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => wallet_transfer_historyUpdateWithoutDelivery_orderInputSchema),z.lazy(() => wallet_transfer_historyUncheckedUpdateWithoutDelivery_orderInputSchema) ]),
  create: z.union([ z.lazy(() => wallet_transfer_historyCreateWithoutDelivery_orderInputSchema),z.lazy(() => wallet_transfer_historyUncheckedCreateWithoutDelivery_orderInputSchema) ]),
}).strict();

export default wallet_transfer_historyUpsertWithWhereUniqueWithoutDelivery_orderInputSchema;
