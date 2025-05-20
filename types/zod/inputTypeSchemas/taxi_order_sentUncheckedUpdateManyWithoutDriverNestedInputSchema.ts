import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_order_sentCreateWithoutDriverInputSchema } from './taxi_order_sentCreateWithoutDriverInputSchema';
import { taxi_order_sentUncheckedCreateWithoutDriverInputSchema } from './taxi_order_sentUncheckedCreateWithoutDriverInputSchema';
import { taxi_order_sentCreateOrConnectWithoutDriverInputSchema } from './taxi_order_sentCreateOrConnectWithoutDriverInputSchema';
import { taxi_order_sentUpsertWithWhereUniqueWithoutDriverInputSchema } from './taxi_order_sentUpsertWithWhereUniqueWithoutDriverInputSchema';
import { taxi_order_sentCreateManyDriverInputEnvelopeSchema } from './taxi_order_sentCreateManyDriverInputEnvelopeSchema';
import { taxi_order_sentWhereUniqueInputSchema } from './taxi_order_sentWhereUniqueInputSchema';
import { taxi_order_sentUpdateWithWhereUniqueWithoutDriverInputSchema } from './taxi_order_sentUpdateWithWhereUniqueWithoutDriverInputSchema';
import { taxi_order_sentUpdateManyWithWhereWithoutDriverInputSchema } from './taxi_order_sentUpdateManyWithWhereWithoutDriverInputSchema';
import { taxi_order_sentScalarWhereInputSchema } from './taxi_order_sentScalarWhereInputSchema';

export const taxi_order_sentUncheckedUpdateManyWithoutDriverNestedInputSchema: z.ZodType<Prisma.taxi_order_sentUncheckedUpdateManyWithoutDriverNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => taxi_order_sentCreateWithoutDriverInputSchema),
					z.lazy(() => taxi_order_sentCreateWithoutDriverInputSchema).array(),
					z.lazy(() => taxi_order_sentUncheckedCreateWithoutDriverInputSchema),
					z.lazy(() => taxi_order_sentUncheckedCreateWithoutDriverInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => taxi_order_sentCreateOrConnectWithoutDriverInputSchema),
					z.lazy(() => taxi_order_sentCreateOrConnectWithoutDriverInputSchema).array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => taxi_order_sentUpsertWithWhereUniqueWithoutDriverInputSchema),
					z.lazy(() => taxi_order_sentUpsertWithWhereUniqueWithoutDriverInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => taxi_order_sentCreateManyDriverInputEnvelopeSchema).optional(),
			set: z
				.union([
					z.lazy(() => taxi_order_sentWhereUniqueInputSchema),
					z.lazy(() => taxi_order_sentWhereUniqueInputSchema).array(),
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => taxi_order_sentWhereUniqueInputSchema),
					z.lazy(() => taxi_order_sentWhereUniqueInputSchema).array(),
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => taxi_order_sentWhereUniqueInputSchema),
					z.lazy(() => taxi_order_sentWhereUniqueInputSchema).array(),
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => taxi_order_sentWhereUniqueInputSchema),
					z.lazy(() => taxi_order_sentWhereUniqueInputSchema).array(),
				])
				.optional(),
			update: z
				.union([
					z.lazy(() => taxi_order_sentUpdateWithWhereUniqueWithoutDriverInputSchema),
					z.lazy(() => taxi_order_sentUpdateWithWhereUniqueWithoutDriverInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => taxi_order_sentUpdateManyWithWhereWithoutDriverInputSchema),
					z.lazy(() => taxi_order_sentUpdateManyWithWhereWithoutDriverInputSchema).array(),
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => taxi_order_sentScalarWhereInputSchema),
					z.lazy(() => taxi_order_sentScalarWhereInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default taxi_order_sentUncheckedUpdateManyWithoutDriverNestedInputSchema;
