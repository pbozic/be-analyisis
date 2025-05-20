import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { order_lobby_usersCreateWithoutOrder_lobbiesInputSchema } from './order_lobby_usersCreateWithoutOrder_lobbiesInputSchema';
import { order_lobby_usersUncheckedCreateWithoutOrder_lobbiesInputSchema } from './order_lobby_usersUncheckedCreateWithoutOrder_lobbiesInputSchema';
import { order_lobby_usersCreateOrConnectWithoutOrder_lobbiesInputSchema } from './order_lobby_usersCreateOrConnectWithoutOrder_lobbiesInputSchema';
import { order_lobby_usersCreateManyOrder_lobbiesInputEnvelopeSchema } from './order_lobby_usersCreateManyOrder_lobbiesInputEnvelopeSchema';
import { order_lobby_usersWhereUniqueInputSchema } from './order_lobby_usersWhereUniqueInputSchema';

export const order_lobby_usersUncheckedCreateNestedManyWithoutOrder_lobbiesInputSchema: z.ZodType<Prisma.order_lobby_usersUncheckedCreateNestedManyWithoutOrder_lobbiesInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => order_lobby_usersCreateWithoutOrder_lobbiesInputSchema),
					z.lazy(() => order_lobby_usersCreateWithoutOrder_lobbiesInputSchema).array(),
					z.lazy(() => order_lobby_usersUncheckedCreateWithoutOrder_lobbiesInputSchema),
					z.lazy(() => order_lobby_usersUncheckedCreateWithoutOrder_lobbiesInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => order_lobby_usersCreateOrConnectWithoutOrder_lobbiesInputSchema),
					z.lazy(() => order_lobby_usersCreateOrConnectWithoutOrder_lobbiesInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => order_lobby_usersCreateManyOrder_lobbiesInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => order_lobby_usersWhereUniqueInputSchema),
					z.lazy(() => order_lobby_usersWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default order_lobby_usersUncheckedCreateNestedManyWithoutOrder_lobbiesInputSchema;
