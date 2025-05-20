import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BUSINESS_TYPESchema } from './BUSINESS_TYPESchema';

export const user_favorite_businessesUncheckedCreateWithoutUsersInputSchema: z.ZodType<Prisma.user_favorite_businessesUncheckedCreateWithoutUsersInput> =
	z
		.object({
			user_favorite_businesses_id: z.string().uuid().optional(),
			business_id: z.string(),
			business_type: z.lazy(() => BUSINESS_TYPESchema),
			created_at: z.coerce.date().optional(),
			updated_at: z.coerce.date().optional(),
		})
		.strict();

export default user_favorite_businessesUncheckedCreateWithoutUsersInputSchema;
