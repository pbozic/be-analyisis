import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { order_lobbiesCreateWithoutOrder_lobby_itemsInputSchema } from './order_lobbiesCreateWithoutOrder_lobby_itemsInputSchema';
import { order_lobbiesUncheckedCreateWithoutOrder_lobby_itemsInputSchema } from './order_lobbiesUncheckedCreateWithoutOrder_lobby_itemsInputSchema';
import { order_lobbiesCreateOrConnectWithoutOrder_lobby_itemsInputSchema } from './order_lobbiesCreateOrConnectWithoutOrder_lobby_itemsInputSchema';
import { order_lobbiesWhereUniqueInputSchema } from './order_lobbiesWhereUniqueInputSchema';

export const order_lobbiesCreateNestedOneWithoutOrder_lobby_itemsInputSchema: z.ZodType<Prisma.order_lobbiesCreateNestedOneWithoutOrder_lobby_itemsInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => order_lobbiesCreateWithoutOrder_lobby_itemsInputSchema),
					z.lazy(() => order_lobbiesUncheckedCreateWithoutOrder_lobby_itemsInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => order_lobbiesCreateOrConnectWithoutOrder_lobby_itemsInputSchema).optional(),
			connect: z.lazy(() => order_lobbiesWhereUniqueInputSchema).optional(),
		})
		.strict();

export default order_lobbiesCreateNestedOneWithoutOrder_lobby_itemsInputSchema;
