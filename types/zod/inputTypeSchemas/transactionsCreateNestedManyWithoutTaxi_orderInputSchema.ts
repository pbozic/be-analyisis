import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { transactionsCreateWithoutTaxi_orderInputSchema } from './transactionsCreateWithoutTaxi_orderInputSchema';
import { transactionsUncheckedCreateWithoutTaxi_orderInputSchema } from './transactionsUncheckedCreateWithoutTaxi_orderInputSchema';
import { transactionsCreateOrConnectWithoutTaxi_orderInputSchema } from './transactionsCreateOrConnectWithoutTaxi_orderInputSchema';
import { transactionsCreateManyTaxi_orderInputEnvelopeSchema } from './transactionsCreateManyTaxi_orderInputEnvelopeSchema';
import { transactionsWhereUniqueInputSchema } from './transactionsWhereUniqueInputSchema';

export const transactionsCreateNestedManyWithoutTaxi_orderInputSchema: z.ZodType<Prisma.transactionsCreateNestedManyWithoutTaxi_orderInput> =
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
			createMany: z.lazy(() => transactionsCreateManyTaxi_orderInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => transactionsWhereUniqueInputSchema),
					z.lazy(() => transactionsWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default transactionsCreateNestedManyWithoutTaxi_orderInputSchema;
