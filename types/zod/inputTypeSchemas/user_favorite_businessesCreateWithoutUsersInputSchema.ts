import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BUSINESS_TYPESchema } from './BUSINESS_TYPESchema';
import { businessCreateNestedOneWithoutUser_favorite_businessesInputSchema } from './businessCreateNestedOneWithoutUser_favorite_businessesInputSchema';

export const user_favorite_businessesCreateWithoutUsersInputSchema: z.ZodType<Prisma.user_favorite_businessesCreateWithoutUsersInput> =
	z
		.object({
			user_favorite_businesses_id: z.string().uuid().optional(),
			business_type: z.lazy(() => BUSINESS_TYPESchema),
			created_at: z.coerce.date().optional(),
			updated_at: z.coerce.date().optional(),
			businesses: z.lazy(() => businessCreateNestedOneWithoutUser_favorite_businessesInputSchema),
		})
		.strict();

export default user_favorite_businessesCreateWithoutUsersInputSchema;
