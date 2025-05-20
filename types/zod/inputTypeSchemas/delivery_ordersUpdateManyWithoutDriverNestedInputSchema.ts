import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_ordersCreateWithoutDriverInputSchema } from './delivery_ordersCreateWithoutDriverInputSchema';
import { delivery_ordersUncheckedCreateWithoutDriverInputSchema } from './delivery_ordersUncheckedCreateWithoutDriverInputSchema';
import { delivery_ordersCreateOrConnectWithoutDriverInputSchema } from './delivery_ordersCreateOrConnectWithoutDriverInputSchema';
import { delivery_ordersUpsertWithWhereUniqueWithoutDriverInputSchema } from './delivery_ordersUpsertWithWhereUniqueWithoutDriverInputSchema';
import { delivery_ordersCreateManyDriverInputEnvelopeSchema } from './delivery_ordersCreateManyDriverInputEnvelopeSchema';
import { delivery_ordersWhereUniqueInputSchema } from './delivery_ordersWhereUniqueInputSchema';
import { delivery_ordersUpdateWithWhereUniqueWithoutDriverInputSchema } from './delivery_ordersUpdateWithWhereUniqueWithoutDriverInputSchema';
import { delivery_ordersUpdateManyWithWhereWithoutDriverInputSchema } from './delivery_ordersUpdateManyWithWhereWithoutDriverInputSchema';
import { delivery_ordersScalarWhereInputSchema } from './delivery_ordersScalarWhereInputSchema';

export const delivery_ordersUpdateManyWithoutDriverNestedInputSchema: z.ZodType<Prisma.delivery_ordersUpdateManyWithoutDriverNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => delivery_ordersCreateWithoutDriverInputSchema),
					z.lazy(() => delivery_ordersCreateWithoutDriverInputSchema).array(),
					z.lazy(() => delivery_ordersUncheckedCreateWithoutDriverInputSchema),
					z.lazy(() => delivery_ordersUncheckedCreateWithoutDriverInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => delivery_ordersCreateOrConnectWithoutDriverInputSchema),
					z.lazy(() => delivery_ordersCreateOrConnectWithoutDriverInputSchema).array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => delivery_ordersUpsertWithWhereUniqueWithoutDriverInputSchema),
					z.lazy(() => delivery_ordersUpsertWithWhereUniqueWithoutDriverInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => delivery_ordersCreateManyDriverInputEnvelopeSchema).optional(),
			set: z
				.union([
					z.lazy(() => delivery_ordersWhereUniqueInputSchema),
					z.lazy(() => delivery_ordersWhereUniqueInputSchema).array(),
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => delivery_ordersWhereUniqueInputSchema),
					z.lazy(() => delivery_ordersWhereUniqueInputSchema).array(),
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => delivery_ordersWhereUniqueInputSchema),
					z.lazy(() => delivery_ordersWhereUniqueInputSchema).array(),
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => delivery_ordersWhereUniqueInputSchema),
					z.lazy(() => delivery_ordersWhereUniqueInputSchema).array(),
				])
				.optional(),
			update: z
				.union([
					z.lazy(() => delivery_ordersUpdateWithWhereUniqueWithoutDriverInputSchema),
					z.lazy(() => delivery_ordersUpdateWithWhereUniqueWithoutDriverInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => delivery_ordersUpdateManyWithWhereWithoutDriverInputSchema),
					z.lazy(() => delivery_ordersUpdateManyWithWhereWithoutDriverInputSchema).array(),
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => delivery_ordersScalarWhereInputSchema),
					z.lazy(() => delivery_ordersScalarWhereInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default delivery_ordersUpdateManyWithoutDriverNestedInputSchema;
