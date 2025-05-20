import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { cashbackCreateWithoutTaxi_orderInputSchema } from './cashbackCreateWithoutTaxi_orderInputSchema';
import { cashbackUncheckedCreateWithoutTaxi_orderInputSchema } from './cashbackUncheckedCreateWithoutTaxi_orderInputSchema';
import { cashbackCreateOrConnectWithoutTaxi_orderInputSchema } from './cashbackCreateOrConnectWithoutTaxi_orderInputSchema';
import { cashbackCreateManyTaxi_orderInputEnvelopeSchema } from './cashbackCreateManyTaxi_orderInputEnvelopeSchema';
import { cashbackWhereUniqueInputSchema } from './cashbackWhereUniqueInputSchema';

export const cashbackUncheckedCreateNestedManyWithoutTaxi_orderInputSchema: z.ZodType<Prisma.cashbackUncheckedCreateNestedManyWithoutTaxi_orderInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => cashbackCreateWithoutTaxi_orderInputSchema),
					z.lazy(() => cashbackCreateWithoutTaxi_orderInputSchema).array(),
					z.lazy(() => cashbackUncheckedCreateWithoutTaxi_orderInputSchema),
					z.lazy(() => cashbackUncheckedCreateWithoutTaxi_orderInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => cashbackCreateOrConnectWithoutTaxi_orderInputSchema),
					z.lazy(() => cashbackCreateOrConnectWithoutTaxi_orderInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => cashbackCreateManyTaxi_orderInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => cashbackWhereUniqueInputSchema),
					z.lazy(() => cashbackWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default cashbackUncheckedCreateNestedManyWithoutTaxi_orderInputSchema;
