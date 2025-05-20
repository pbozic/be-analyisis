import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { taxi_order_sentCreateWithoutOrderInputSchema } from './taxi_order_sentCreateWithoutOrderInputSchema';
import { taxi_order_sentUncheckedCreateWithoutOrderInputSchema } from './taxi_order_sentUncheckedCreateWithoutOrderInputSchema';
import { taxi_order_sentCreateOrConnectWithoutOrderInputSchema } from './taxi_order_sentCreateOrConnectWithoutOrderInputSchema';
import { taxi_order_sentUpsertWithWhereUniqueWithoutOrderInputSchema } from './taxi_order_sentUpsertWithWhereUniqueWithoutOrderInputSchema';
import { taxi_order_sentCreateManyOrderInputEnvelopeSchema } from './taxi_order_sentCreateManyOrderInputEnvelopeSchema';
import { taxi_order_sentWhereUniqueInputSchema } from './taxi_order_sentWhereUniqueInputSchema';
import { taxi_order_sentUpdateWithWhereUniqueWithoutOrderInputSchema } from './taxi_order_sentUpdateWithWhereUniqueWithoutOrderInputSchema';
import { taxi_order_sentUpdateManyWithWhereWithoutOrderInputSchema } from './taxi_order_sentUpdateManyWithWhereWithoutOrderInputSchema';
import { taxi_order_sentScalarWhereInputSchema } from './taxi_order_sentScalarWhereInputSchema';

export const taxi_order_sentUpdateManyWithoutOrderNestedInputSchema: z.ZodType<Prisma.taxi_order_sentUpdateManyWithoutOrderNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => taxi_order_sentCreateWithoutOrderInputSchema),
					z.lazy(() => taxi_order_sentCreateWithoutOrderInputSchema).array(),
					z.lazy(() => taxi_order_sentUncheckedCreateWithoutOrderInputSchema),
					z.lazy(() => taxi_order_sentUncheckedCreateWithoutOrderInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => taxi_order_sentCreateOrConnectWithoutOrderInputSchema),
					z.lazy(() => taxi_order_sentCreateOrConnectWithoutOrderInputSchema).array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => taxi_order_sentUpsertWithWhereUniqueWithoutOrderInputSchema),
					z.lazy(() => taxi_order_sentUpsertWithWhereUniqueWithoutOrderInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => taxi_order_sentCreateManyOrderInputEnvelopeSchema).optional(),
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
					z.lazy(() => taxi_order_sentUpdateWithWhereUniqueWithoutOrderInputSchema),
					z.lazy(() => taxi_order_sentUpdateWithWhereUniqueWithoutOrderInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => taxi_order_sentUpdateManyWithWhereWithoutOrderInputSchema),
					z.lazy(() => taxi_order_sentUpdateManyWithWhereWithoutOrderInputSchema).array(),
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

export default taxi_order_sentUpdateManyWithoutOrderNestedInputSchema;
