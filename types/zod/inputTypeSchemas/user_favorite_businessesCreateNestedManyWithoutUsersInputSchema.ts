import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { user_favorite_businessesCreateWithoutUsersInputSchema } from './user_favorite_businessesCreateWithoutUsersInputSchema';
import { user_favorite_businessesUncheckedCreateWithoutUsersInputSchema } from './user_favorite_businessesUncheckedCreateWithoutUsersInputSchema';
import { user_favorite_businessesCreateOrConnectWithoutUsersInputSchema } from './user_favorite_businessesCreateOrConnectWithoutUsersInputSchema';
import { user_favorite_businessesCreateManyUsersInputEnvelopeSchema } from './user_favorite_businessesCreateManyUsersInputEnvelopeSchema';
import { user_favorite_businessesWhereUniqueInputSchema } from './user_favorite_businessesWhereUniqueInputSchema';

export const user_favorite_businessesCreateNestedManyWithoutUsersInputSchema: z.ZodType<Prisma.user_favorite_businessesCreateNestedManyWithoutUsersInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => user_favorite_businessesCreateWithoutUsersInputSchema),
					z.lazy(() => user_favorite_businessesCreateWithoutUsersInputSchema).array(),
					z.lazy(() => user_favorite_businessesUncheckedCreateWithoutUsersInputSchema),
					z.lazy(() => user_favorite_businessesUncheckedCreateWithoutUsersInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => user_favorite_businessesCreateOrConnectWithoutUsersInputSchema),
					z.lazy(() => user_favorite_businessesCreateOrConnectWithoutUsersInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => user_favorite_businessesCreateManyUsersInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => user_favorite_businessesWhereUniqueInputSchema),
					z.lazy(() => user_favorite_businessesWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default user_favorite_businessesCreateNestedManyWithoutUsersInputSchema;
