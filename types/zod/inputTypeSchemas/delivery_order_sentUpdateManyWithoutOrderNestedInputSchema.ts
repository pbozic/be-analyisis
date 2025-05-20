import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_order_sentCreateWithoutOrderInputSchema } from './delivery_order_sentCreateWithoutOrderInputSchema';
import { delivery_order_sentUncheckedCreateWithoutOrderInputSchema } from './delivery_order_sentUncheckedCreateWithoutOrderInputSchema';
import { delivery_order_sentCreateOrConnectWithoutOrderInputSchema } from './delivery_order_sentCreateOrConnectWithoutOrderInputSchema';
import { delivery_order_sentUpsertWithWhereUniqueWithoutOrderInputSchema } from './delivery_order_sentUpsertWithWhereUniqueWithoutOrderInputSchema';
import { delivery_order_sentCreateManyOrderInputEnvelopeSchema } from './delivery_order_sentCreateManyOrderInputEnvelopeSchema';
import { delivery_order_sentWhereUniqueInputSchema } from './delivery_order_sentWhereUniqueInputSchema';
import { delivery_order_sentUpdateWithWhereUniqueWithoutOrderInputSchema } from './delivery_order_sentUpdateWithWhereUniqueWithoutOrderInputSchema';
import { delivery_order_sentUpdateManyWithWhereWithoutOrderInputSchema } from './delivery_order_sentUpdateManyWithWhereWithoutOrderInputSchema';
import { delivery_order_sentScalarWhereInputSchema } from './delivery_order_sentScalarWhereInputSchema';

export const delivery_order_sentUpdateManyWithoutOrderNestedInputSchema: z.ZodType<Prisma.delivery_order_sentUpdateManyWithoutOrderNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => delivery_order_sentCreateWithoutOrderInputSchema),
					z.lazy(() => delivery_order_sentCreateWithoutOrderInputSchema).array(),
					z.lazy(() => delivery_order_sentUncheckedCreateWithoutOrderInputSchema),
					z.lazy(() => delivery_order_sentUncheckedCreateWithoutOrderInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => delivery_order_sentCreateOrConnectWithoutOrderInputSchema),
					z.lazy(() => delivery_order_sentCreateOrConnectWithoutOrderInputSchema).array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => delivery_order_sentUpsertWithWhereUniqueWithoutOrderInputSchema),
					z.lazy(() => delivery_order_sentUpsertWithWhereUniqueWithoutOrderInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => delivery_order_sentCreateManyOrderInputEnvelopeSchema).optional(),
			set: z
				.union([
					z.lazy(() => delivery_order_sentWhereUniqueInputSchema),
					z.lazy(() => delivery_order_sentWhereUniqueInputSchema).array(),
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => delivery_order_sentWhereUniqueInputSchema),
					z.lazy(() => delivery_order_sentWhereUniqueInputSchema).array(),
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => delivery_order_sentWhereUniqueInputSchema),
					z.lazy(() => delivery_order_sentWhereUniqueInputSchema).array(),
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => delivery_order_sentWhereUniqueInputSchema),
					z.lazy(() => delivery_order_sentWhereUniqueInputSchema).array(),
				])
				.optional(),
			update: z
				.union([
					z.lazy(() => delivery_order_sentUpdateWithWhereUniqueWithoutOrderInputSchema),
					z.lazy(() => delivery_order_sentUpdateWithWhereUniqueWithoutOrderInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => delivery_order_sentUpdateManyWithWhereWithoutOrderInputSchema),
					z.lazy(() => delivery_order_sentUpdateManyWithWhereWithoutOrderInputSchema).array(),
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => delivery_order_sentScalarWhereInputSchema),
					z.lazy(() => delivery_order_sentScalarWhereInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default delivery_order_sentUpdateManyWithoutOrderNestedInputSchema;
