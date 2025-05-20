import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { order_lobby_usersCreateManyUsersInputSchema } from './order_lobby_usersCreateManyUsersInputSchema';

export const order_lobby_usersCreateManyUsersInputEnvelopeSchema: z.ZodType<Prisma.order_lobby_usersCreateManyUsersInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => order_lobby_usersCreateManyUsersInputSchema),
				z.lazy(() => order_lobby_usersCreateManyUsersInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();

export default order_lobby_usersCreateManyUsersInputEnvelopeSchema;
