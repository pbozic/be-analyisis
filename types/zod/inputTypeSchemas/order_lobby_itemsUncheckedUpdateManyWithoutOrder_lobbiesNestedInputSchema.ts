import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { order_lobby_itemsCreateWithoutOrder_lobbiesInputSchema } from './order_lobby_itemsCreateWithoutOrder_lobbiesInputSchema';
import { order_lobby_itemsUncheckedCreateWithoutOrder_lobbiesInputSchema } from './order_lobby_itemsUncheckedCreateWithoutOrder_lobbiesInputSchema';
import { order_lobby_itemsCreateOrConnectWithoutOrder_lobbiesInputSchema } from './order_lobby_itemsCreateOrConnectWithoutOrder_lobbiesInputSchema';
import { order_lobby_itemsUpsertWithWhereUniqueWithoutOrder_lobbiesInputSchema } from './order_lobby_itemsUpsertWithWhereUniqueWithoutOrder_lobbiesInputSchema';
import { order_lobby_itemsCreateManyOrder_lobbiesInputEnvelopeSchema } from './order_lobby_itemsCreateManyOrder_lobbiesInputEnvelopeSchema';
import { order_lobby_itemsWhereUniqueInputSchema } from './order_lobby_itemsWhereUniqueInputSchema';
import { order_lobby_itemsUpdateWithWhereUniqueWithoutOrder_lobbiesInputSchema } from './order_lobby_itemsUpdateWithWhereUniqueWithoutOrder_lobbiesInputSchema';
import { order_lobby_itemsUpdateManyWithWhereWithoutOrder_lobbiesInputSchema } from './order_lobby_itemsUpdateManyWithWhereWithoutOrder_lobbiesInputSchema';
import { order_lobby_itemsScalarWhereInputSchema } from './order_lobby_itemsScalarWhereInputSchema';

export const order_lobby_itemsUncheckedUpdateManyWithoutOrder_lobbiesNestedInputSchema: z.ZodType<Prisma.order_lobby_itemsUncheckedUpdateManyWithoutOrder_lobbiesNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => order_lobby_itemsCreateWithoutOrder_lobbiesInputSchema),
					z.lazy(() => order_lobby_itemsCreateWithoutOrder_lobbiesInputSchema).array(),
					z.lazy(() => order_lobby_itemsUncheckedCreateWithoutOrder_lobbiesInputSchema),
					z.lazy(() => order_lobby_itemsUncheckedCreateWithoutOrder_lobbiesInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => order_lobby_itemsCreateOrConnectWithoutOrder_lobbiesInputSchema),
					z.lazy(() => order_lobby_itemsCreateOrConnectWithoutOrder_lobbiesInputSchema).array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => order_lobby_itemsUpsertWithWhereUniqueWithoutOrder_lobbiesInputSchema),
					z.lazy(() => order_lobby_itemsUpsertWithWhereUniqueWithoutOrder_lobbiesInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => order_lobby_itemsCreateManyOrder_lobbiesInputEnvelopeSchema).optional(),
			set: z
				.union([
					z.lazy(() => order_lobby_itemsWhereUniqueInputSchema),
					z.lazy(() => order_lobby_itemsWhereUniqueInputSchema).array(),
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => order_lobby_itemsWhereUniqueInputSchema),
					z.lazy(() => order_lobby_itemsWhereUniqueInputSchema).array(),
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => order_lobby_itemsWhereUniqueInputSchema),
					z.lazy(() => order_lobby_itemsWhereUniqueInputSchema).array(),
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => order_lobby_itemsWhereUniqueInputSchema),
					z.lazy(() => order_lobby_itemsWhereUniqueInputSchema).array(),
				])
				.optional(),
			update: z
				.union([
					z.lazy(() => order_lobby_itemsUpdateWithWhereUniqueWithoutOrder_lobbiesInputSchema),
					z.lazy(() => order_lobby_itemsUpdateWithWhereUniqueWithoutOrder_lobbiesInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => order_lobby_itemsUpdateManyWithWhereWithoutOrder_lobbiesInputSchema),
					z.lazy(() => order_lobby_itemsUpdateManyWithWhereWithoutOrder_lobbiesInputSchema).array(),
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => order_lobby_itemsScalarWhereInputSchema),
					z.lazy(() => order_lobby_itemsScalarWhereInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default order_lobby_itemsUncheckedUpdateManyWithoutOrder_lobbiesNestedInputSchema;
