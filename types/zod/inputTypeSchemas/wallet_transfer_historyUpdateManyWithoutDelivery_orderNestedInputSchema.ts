import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { wallet_transfer_historyCreateWithoutDelivery_orderInputSchema } from './wallet_transfer_historyCreateWithoutDelivery_orderInputSchema';
import { wallet_transfer_historyUncheckedCreateWithoutDelivery_orderInputSchema } from './wallet_transfer_historyUncheckedCreateWithoutDelivery_orderInputSchema';
import { wallet_transfer_historyCreateOrConnectWithoutDelivery_orderInputSchema } from './wallet_transfer_historyCreateOrConnectWithoutDelivery_orderInputSchema';
import { wallet_transfer_historyUpsertWithWhereUniqueWithoutDelivery_orderInputSchema } from './wallet_transfer_historyUpsertWithWhereUniqueWithoutDelivery_orderInputSchema';
import { wallet_transfer_historyCreateManyDelivery_orderInputEnvelopeSchema } from './wallet_transfer_historyCreateManyDelivery_orderInputEnvelopeSchema';
import { wallet_transfer_historyWhereUniqueInputSchema } from './wallet_transfer_historyWhereUniqueInputSchema';
import { wallet_transfer_historyUpdateWithWhereUniqueWithoutDelivery_orderInputSchema } from './wallet_transfer_historyUpdateWithWhereUniqueWithoutDelivery_orderInputSchema';
import { wallet_transfer_historyUpdateManyWithWhereWithoutDelivery_orderInputSchema } from './wallet_transfer_historyUpdateManyWithWhereWithoutDelivery_orderInputSchema';
import { wallet_transfer_historyScalarWhereInputSchema } from './wallet_transfer_historyScalarWhereInputSchema';

export const wallet_transfer_historyUpdateManyWithoutDelivery_orderNestedInputSchema: z.ZodType<Prisma.wallet_transfer_historyUpdateManyWithoutDelivery_orderNestedInput> = z.object({
  create: z.union([ z.lazy(() => wallet_transfer_historyCreateWithoutDelivery_orderInputSchema),z.lazy(() => wallet_transfer_historyCreateWithoutDelivery_orderInputSchema).array(),z.lazy(() => wallet_transfer_historyUncheckedCreateWithoutDelivery_orderInputSchema),z.lazy(() => wallet_transfer_historyUncheckedCreateWithoutDelivery_orderInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => wallet_transfer_historyCreateOrConnectWithoutDelivery_orderInputSchema),z.lazy(() => wallet_transfer_historyCreateOrConnectWithoutDelivery_orderInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => wallet_transfer_historyUpsertWithWhereUniqueWithoutDelivery_orderInputSchema),z.lazy(() => wallet_transfer_historyUpsertWithWhereUniqueWithoutDelivery_orderInputSchema).array() ]).optional(),
  createMany: z.lazy(() => wallet_transfer_historyCreateManyDelivery_orderInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => wallet_transfer_historyWhereUniqueInputSchema),z.lazy(() => wallet_transfer_historyWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => wallet_transfer_historyWhereUniqueInputSchema),z.lazy(() => wallet_transfer_historyWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => wallet_transfer_historyWhereUniqueInputSchema),z.lazy(() => wallet_transfer_historyWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => wallet_transfer_historyWhereUniqueInputSchema),z.lazy(() => wallet_transfer_historyWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => wallet_transfer_historyUpdateWithWhereUniqueWithoutDelivery_orderInputSchema),z.lazy(() => wallet_transfer_historyUpdateWithWhereUniqueWithoutDelivery_orderInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => wallet_transfer_historyUpdateManyWithWhereWithoutDelivery_orderInputSchema),z.lazy(() => wallet_transfer_historyUpdateManyWithWhereWithoutDelivery_orderInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => wallet_transfer_historyScalarWhereInputSchema),z.lazy(() => wallet_transfer_historyScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default wallet_transfer_historyUpdateManyWithoutDelivery_orderNestedInputSchema;
