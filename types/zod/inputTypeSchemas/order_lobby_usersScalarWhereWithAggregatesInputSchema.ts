import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { FloatWithAggregatesFilterSchema } from './FloatWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const order_lobby_usersScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.order_lobby_usersScalarWhereWithAggregatesInput> =
	z
		.object({
			AND: z
				.union([
					z.lazy(() => order_lobby_usersScalarWhereWithAggregatesInputSchema),
					z.lazy(() => order_lobby_usersScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			OR: z
				.lazy(() => order_lobby_usersScalarWhereWithAggregatesInputSchema)
				.array()
				.optional(),
			NOT: z
				.union([
					z.lazy(() => order_lobby_usersScalarWhereWithAggregatesInputSchema),
					z.lazy(() => order_lobby_usersScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			order_lobby_users_id: z.union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()]).optional(),
			user_id: z.union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()]).optional(),
			order_lobbies_id: z.union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()]).optional(),
			limit: z.union([z.lazy(() => FloatWithAggregatesFilterSchema), z.number()]).optional(),
			created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
			updated_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
		})
		.strict();

export default order_lobby_usersScalarWhereWithAggregatesInputSchema;
