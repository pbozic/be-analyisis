import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { FloatFilterSchema } from './FloatFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const order_lobby_usersScalarWhereInputSchema: z.ZodType<Prisma.order_lobby_usersScalarWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => order_lobby_usersScalarWhereInputSchema),
				z.lazy(() => order_lobby_usersScalarWhereInputSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => order_lobby_usersScalarWhereInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => order_lobby_usersScalarWhereInputSchema),
				z.lazy(() => order_lobby_usersScalarWhereInputSchema).array(),
			])
			.optional(),
		order_lobby_users_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
		user_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
		order_lobbies_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
		limit: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
		created_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		updated_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
	})
	.strict();

export default order_lobby_usersScalarWhereInputSchema;
