import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_ordersCreateWithoutDriverInputSchema } from './taxi_ordersCreateWithoutDriverInputSchema';
import { taxi_ordersUncheckedCreateWithoutDriverInputSchema } from './taxi_ordersUncheckedCreateWithoutDriverInputSchema';
import { taxi_ordersCreateOrConnectWithoutDriverInputSchema } from './taxi_ordersCreateOrConnectWithoutDriverInputSchema';
import { taxi_ordersUpsertWithWhereUniqueWithoutDriverInputSchema } from './taxi_ordersUpsertWithWhereUniqueWithoutDriverInputSchema';
import { taxi_ordersCreateManyDriverInputEnvelopeSchema } from './taxi_ordersCreateManyDriverInputEnvelopeSchema';
import { taxi_ordersWhereUniqueInputSchema } from './taxi_ordersWhereUniqueInputSchema';
import { taxi_ordersUpdateWithWhereUniqueWithoutDriverInputSchema } from './taxi_ordersUpdateWithWhereUniqueWithoutDriverInputSchema';
import { taxi_ordersUpdateManyWithWhereWithoutDriverInputSchema } from './taxi_ordersUpdateManyWithWhereWithoutDriverInputSchema';
import { taxi_ordersScalarWhereInputSchema } from './taxi_ordersScalarWhereInputSchema';

export const taxi_ordersUpdateManyWithoutDriverNestedInputSchema: z.ZodType<Prisma.taxi_ordersUpdateManyWithoutDriverNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => taxi_ordersCreateWithoutDriverInputSchema),
					z.lazy(() => taxi_ordersCreateWithoutDriverInputSchema).array(),
					z.lazy(() => taxi_ordersUncheckedCreateWithoutDriverInputSchema),
					z.lazy(() => taxi_ordersUncheckedCreateWithoutDriverInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => taxi_ordersCreateOrConnectWithoutDriverInputSchema),
					z.lazy(() => taxi_ordersCreateOrConnectWithoutDriverInputSchema).array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => taxi_ordersUpsertWithWhereUniqueWithoutDriverInputSchema),
					z.lazy(() => taxi_ordersUpsertWithWhereUniqueWithoutDriverInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => taxi_ordersCreateManyDriverInputEnvelopeSchema).optional(),
			set: z
				.union([
					z.lazy(() => taxi_ordersWhereUniqueInputSchema),
					z.lazy(() => taxi_ordersWhereUniqueInputSchema).array(),
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => taxi_ordersWhereUniqueInputSchema),
					z.lazy(() => taxi_ordersWhereUniqueInputSchema).array(),
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => taxi_ordersWhereUniqueInputSchema),
					z.lazy(() => taxi_ordersWhereUniqueInputSchema).array(),
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => taxi_ordersWhereUniqueInputSchema),
					z.lazy(() => taxi_ordersWhereUniqueInputSchema).array(),
				])
				.optional(),
			update: z
				.union([
					z.lazy(() => taxi_ordersUpdateWithWhereUniqueWithoutDriverInputSchema),
					z.lazy(() => taxi_ordersUpdateWithWhereUniqueWithoutDriverInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => taxi_ordersUpdateManyWithWhereWithoutDriverInputSchema),
					z.lazy(() => taxi_ordersUpdateManyWithWhereWithoutDriverInputSchema).array(),
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => taxi_ordersScalarWhereInputSchema),
					z.lazy(() => taxi_ordersScalarWhereInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default taxi_ordersUpdateManyWithoutDriverNestedInputSchema;
