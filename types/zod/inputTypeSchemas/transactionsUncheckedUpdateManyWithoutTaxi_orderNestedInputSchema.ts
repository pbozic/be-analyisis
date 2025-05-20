import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { transactionsCreateWithoutTaxi_orderInputSchema } from './transactionsCreateWithoutTaxi_orderInputSchema';
import { transactionsUncheckedCreateWithoutTaxi_orderInputSchema } from './transactionsUncheckedCreateWithoutTaxi_orderInputSchema';
import { transactionsCreateOrConnectWithoutTaxi_orderInputSchema } from './transactionsCreateOrConnectWithoutTaxi_orderInputSchema';
import { transactionsUpsertWithWhereUniqueWithoutTaxi_orderInputSchema } from './transactionsUpsertWithWhereUniqueWithoutTaxi_orderInputSchema';
import { transactionsCreateManyTaxi_orderInputEnvelopeSchema } from './transactionsCreateManyTaxi_orderInputEnvelopeSchema';
import { transactionsWhereUniqueInputSchema } from './transactionsWhereUniqueInputSchema';
import { transactionsUpdateWithWhereUniqueWithoutTaxi_orderInputSchema } from './transactionsUpdateWithWhereUniqueWithoutTaxi_orderInputSchema';
import { transactionsUpdateManyWithWhereWithoutTaxi_orderInputSchema } from './transactionsUpdateManyWithWhereWithoutTaxi_orderInputSchema';
import { transactionsScalarWhereInputSchema } from './transactionsScalarWhereInputSchema';

export const transactionsUncheckedUpdateManyWithoutTaxi_orderNestedInputSchema: z.ZodType<Prisma.transactionsUncheckedUpdateManyWithoutTaxi_orderNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => transactionsCreateWithoutTaxi_orderInputSchema),
					z.lazy(() => transactionsCreateWithoutTaxi_orderInputSchema).array(),
					z.lazy(() => transactionsUncheckedCreateWithoutTaxi_orderInputSchema),
					z.lazy(() => transactionsUncheckedCreateWithoutTaxi_orderInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => transactionsCreateOrConnectWithoutTaxi_orderInputSchema),
					z.lazy(() => transactionsCreateOrConnectWithoutTaxi_orderInputSchema).array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => transactionsUpsertWithWhereUniqueWithoutTaxi_orderInputSchema),
					z.lazy(() => transactionsUpsertWithWhereUniqueWithoutTaxi_orderInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => transactionsCreateManyTaxi_orderInputEnvelopeSchema).optional(),
			set: z
				.union([
					z.lazy(() => transactionsWhereUniqueInputSchema),
					z.lazy(() => transactionsWhereUniqueInputSchema).array(),
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => transactionsWhereUniqueInputSchema),
					z.lazy(() => transactionsWhereUniqueInputSchema).array(),
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => transactionsWhereUniqueInputSchema),
					z.lazy(() => transactionsWhereUniqueInputSchema).array(),
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => transactionsWhereUniqueInputSchema),
					z.lazy(() => transactionsWhereUniqueInputSchema).array(),
				])
				.optional(),
			update: z
				.union([
					z.lazy(() => transactionsUpdateWithWhereUniqueWithoutTaxi_orderInputSchema),
					z.lazy(() => transactionsUpdateWithWhereUniqueWithoutTaxi_orderInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => transactionsUpdateManyWithWhereWithoutTaxi_orderInputSchema),
					z.lazy(() => transactionsUpdateManyWithWhereWithoutTaxi_orderInputSchema).array(),
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => transactionsScalarWhereInputSchema),
					z.lazy(() => transactionsScalarWhereInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default transactionsUncheckedUpdateManyWithoutTaxi_orderNestedInputSchema;
