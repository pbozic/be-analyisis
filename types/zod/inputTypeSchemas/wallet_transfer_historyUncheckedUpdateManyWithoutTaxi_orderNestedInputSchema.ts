import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { wallet_transfer_historyCreateWithoutTaxi_orderInputSchema } from './wallet_transfer_historyCreateWithoutTaxi_orderInputSchema';
import { wallet_transfer_historyUncheckedCreateWithoutTaxi_orderInputSchema } from './wallet_transfer_historyUncheckedCreateWithoutTaxi_orderInputSchema';
import { wallet_transfer_historyCreateOrConnectWithoutTaxi_orderInputSchema } from './wallet_transfer_historyCreateOrConnectWithoutTaxi_orderInputSchema';
import { wallet_transfer_historyUpsertWithWhereUniqueWithoutTaxi_orderInputSchema } from './wallet_transfer_historyUpsertWithWhereUniqueWithoutTaxi_orderInputSchema';
import { wallet_transfer_historyCreateManyTaxi_orderInputEnvelopeSchema } from './wallet_transfer_historyCreateManyTaxi_orderInputEnvelopeSchema';
import { wallet_transfer_historyWhereUniqueInputSchema } from './wallet_transfer_historyWhereUniqueInputSchema';
import { wallet_transfer_historyUpdateWithWhereUniqueWithoutTaxi_orderInputSchema } from './wallet_transfer_historyUpdateWithWhereUniqueWithoutTaxi_orderInputSchema';
import { wallet_transfer_historyUpdateManyWithWhereWithoutTaxi_orderInputSchema } from './wallet_transfer_historyUpdateManyWithWhereWithoutTaxi_orderInputSchema';
import { wallet_transfer_historyScalarWhereInputSchema } from './wallet_transfer_historyScalarWhereInputSchema';

export const wallet_transfer_historyUncheckedUpdateManyWithoutTaxi_orderNestedInputSchema: z.ZodType<Prisma.wallet_transfer_historyUncheckedUpdateManyWithoutTaxi_orderNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => wallet_transfer_historyCreateWithoutTaxi_orderInputSchema),
					z.lazy(() => wallet_transfer_historyCreateWithoutTaxi_orderInputSchema).array(),
					z.lazy(() => wallet_transfer_historyUncheckedCreateWithoutTaxi_orderInputSchema),
					z.lazy(() => wallet_transfer_historyUncheckedCreateWithoutTaxi_orderInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => wallet_transfer_historyCreateOrConnectWithoutTaxi_orderInputSchema),
					z.lazy(() => wallet_transfer_historyCreateOrConnectWithoutTaxi_orderInputSchema).array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => wallet_transfer_historyUpsertWithWhereUniqueWithoutTaxi_orderInputSchema),
					z.lazy(() => wallet_transfer_historyUpsertWithWhereUniqueWithoutTaxi_orderInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => wallet_transfer_historyCreateManyTaxi_orderInputEnvelopeSchema).optional(),
			set: z
				.union([
					z.lazy(() => wallet_transfer_historyWhereUniqueInputSchema),
					z.lazy(() => wallet_transfer_historyWhereUniqueInputSchema).array(),
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => wallet_transfer_historyWhereUniqueInputSchema),
					z.lazy(() => wallet_transfer_historyWhereUniqueInputSchema).array(),
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => wallet_transfer_historyWhereUniqueInputSchema),
					z.lazy(() => wallet_transfer_historyWhereUniqueInputSchema).array(),
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => wallet_transfer_historyWhereUniqueInputSchema),
					z.lazy(() => wallet_transfer_historyWhereUniqueInputSchema).array(),
				])
				.optional(),
			update: z
				.union([
					z.lazy(() => wallet_transfer_historyUpdateWithWhereUniqueWithoutTaxi_orderInputSchema),
					z.lazy(() => wallet_transfer_historyUpdateWithWhereUniqueWithoutTaxi_orderInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => wallet_transfer_historyUpdateManyWithWhereWithoutTaxi_orderInputSchema),
					z.lazy(() => wallet_transfer_historyUpdateManyWithWhereWithoutTaxi_orderInputSchema).array(),
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => wallet_transfer_historyScalarWhereInputSchema),
					z.lazy(() => wallet_transfer_historyScalarWhereInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default wallet_transfer_historyUncheckedUpdateManyWithoutTaxi_orderNestedInputSchema;
