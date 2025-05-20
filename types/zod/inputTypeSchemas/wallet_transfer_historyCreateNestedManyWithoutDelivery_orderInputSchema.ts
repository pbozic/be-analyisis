import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { wallet_transfer_historyCreateWithoutDelivery_orderInputSchema } from './wallet_transfer_historyCreateWithoutDelivery_orderInputSchema';
import { wallet_transfer_historyUncheckedCreateWithoutDelivery_orderInputSchema } from './wallet_transfer_historyUncheckedCreateWithoutDelivery_orderInputSchema';
import { wallet_transfer_historyCreateOrConnectWithoutDelivery_orderInputSchema } from './wallet_transfer_historyCreateOrConnectWithoutDelivery_orderInputSchema';
import { wallet_transfer_historyCreateManyDelivery_orderInputEnvelopeSchema } from './wallet_transfer_historyCreateManyDelivery_orderInputEnvelopeSchema';
import { wallet_transfer_historyWhereUniqueInputSchema } from './wallet_transfer_historyWhereUniqueInputSchema';

export const wallet_transfer_historyCreateNestedManyWithoutDelivery_orderInputSchema: z.ZodType<Prisma.wallet_transfer_historyCreateNestedManyWithoutDelivery_orderInput> = z.object({
  create: z.union([ z.lazy(() => wallet_transfer_historyCreateWithoutDelivery_orderInputSchema),z.lazy(() => wallet_transfer_historyCreateWithoutDelivery_orderInputSchema).array(),z.lazy(() => wallet_transfer_historyUncheckedCreateWithoutDelivery_orderInputSchema),z.lazy(() => wallet_transfer_historyUncheckedCreateWithoutDelivery_orderInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => wallet_transfer_historyCreateOrConnectWithoutDelivery_orderInputSchema),z.lazy(() => wallet_transfer_historyCreateOrConnectWithoutDelivery_orderInputSchema).array() ]).optional(),
  createMany: z.lazy(() => wallet_transfer_historyCreateManyDelivery_orderInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => wallet_transfer_historyWhereUniqueInputSchema),z.lazy(() => wallet_transfer_historyWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default wallet_transfer_historyCreateNestedManyWithoutDelivery_orderInputSchema;
