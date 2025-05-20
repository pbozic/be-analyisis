import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { order_lobby_itemsScalarWhereInputSchema } from './order_lobby_itemsScalarWhereInputSchema';
import { order_lobby_itemsUpdateManyMutationInputSchema } from './order_lobby_itemsUpdateManyMutationInputSchema';
import { order_lobby_itemsUncheckedUpdateManyWithoutOrder_lobbiesInputSchema } from './order_lobby_itemsUncheckedUpdateManyWithoutOrder_lobbiesInputSchema';

export const order_lobby_itemsUpdateManyWithWhereWithoutOrder_lobbiesInputSchema: z.ZodType<Prisma.order_lobby_itemsUpdateManyWithWhereWithoutOrder_lobbiesInput> =
	z
		.object({
			where: z.lazy(() => order_lobby_itemsScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => order_lobby_itemsUpdateManyMutationInputSchema),
				z.lazy(() => order_lobby_itemsUncheckedUpdateManyWithoutOrder_lobbiesInputSchema),
			]),
		})
		.strict();

export default order_lobby_itemsUpdateManyWithWhereWithoutOrder_lobbiesInputSchema;
