import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { wallet_transfer_historyCreateWithoutTaxi_orderInputSchema } from './wallet_transfer_historyCreateWithoutTaxi_orderInputSchema';
import { wallet_transfer_historyUncheckedCreateWithoutTaxi_orderInputSchema } from './wallet_transfer_historyUncheckedCreateWithoutTaxi_orderInputSchema';
import { wallet_transfer_historyCreateOrConnectWithoutTaxi_orderInputSchema } from './wallet_transfer_historyCreateOrConnectWithoutTaxi_orderInputSchema';
import { wallet_transfer_historyCreateManyTaxi_orderInputEnvelopeSchema } from './wallet_transfer_historyCreateManyTaxi_orderInputEnvelopeSchema';
import { wallet_transfer_historyWhereUniqueInputSchema } from './wallet_transfer_historyWhereUniqueInputSchema';

export const wallet_transfer_historyUncheckedCreateNestedManyWithoutTaxi_orderInputSchema: z.ZodType<Prisma.wallet_transfer_historyUncheckedCreateNestedManyWithoutTaxi_orderInput> = z.object({
  create: z.union([ z.lazy(() => wallet_transfer_historyCreateWithoutTaxi_orderInputSchema),z.lazy(() => wallet_transfer_historyCreateWithoutTaxi_orderInputSchema).array(),z.lazy(() => wallet_transfer_historyUncheckedCreateWithoutTaxi_orderInputSchema),z.lazy(() => wallet_transfer_historyUncheckedCreateWithoutTaxi_orderInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => wallet_transfer_historyCreateOrConnectWithoutTaxi_orderInputSchema),z.lazy(() => wallet_transfer_historyCreateOrConnectWithoutTaxi_orderInputSchema).array() ]).optional(),
  createMany: z.lazy(() => wallet_transfer_historyCreateManyTaxi_orderInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => wallet_transfer_historyWhereUniqueInputSchema),z.lazy(() => wallet_transfer_historyWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default wallet_transfer_historyUncheckedCreateNestedManyWithoutTaxi_orderInputSchema;
