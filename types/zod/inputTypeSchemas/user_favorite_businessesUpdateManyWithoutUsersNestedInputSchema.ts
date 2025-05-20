import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { user_favorite_businessesCreateWithoutUsersInputSchema } from './user_favorite_businessesCreateWithoutUsersInputSchema';
import { user_favorite_businessesUncheckedCreateWithoutUsersInputSchema } from './user_favorite_businessesUncheckedCreateWithoutUsersInputSchema';
import { user_favorite_businessesCreateOrConnectWithoutUsersInputSchema } from './user_favorite_businessesCreateOrConnectWithoutUsersInputSchema';
import { user_favorite_businessesUpsertWithWhereUniqueWithoutUsersInputSchema } from './user_favorite_businessesUpsertWithWhereUniqueWithoutUsersInputSchema';
import { user_favorite_businessesCreateManyUsersInputEnvelopeSchema } from './user_favorite_businessesCreateManyUsersInputEnvelopeSchema';
import { user_favorite_businessesWhereUniqueInputSchema } from './user_favorite_businessesWhereUniqueInputSchema';
import { user_favorite_businessesUpdateWithWhereUniqueWithoutUsersInputSchema } from './user_favorite_businessesUpdateWithWhereUniqueWithoutUsersInputSchema';
import { user_favorite_businessesUpdateManyWithWhereWithoutUsersInputSchema } from './user_favorite_businessesUpdateManyWithWhereWithoutUsersInputSchema';
import { user_favorite_businessesScalarWhereInputSchema } from './user_favorite_businessesScalarWhereInputSchema';

export const user_favorite_businessesUpdateManyWithoutUsersNestedInputSchema: z.ZodType<Prisma.user_favorite_businessesUpdateManyWithoutUsersNestedInput> =
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
			upsert: z
				.union([
					z.lazy(() => user_favorite_businessesUpsertWithWhereUniqueWithoutUsersInputSchema),
					z.lazy(() => user_favorite_businessesUpsertWithWhereUniqueWithoutUsersInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => user_favorite_businessesCreateManyUsersInputEnvelopeSchema).optional(),
			set: z
				.union([
					z.lazy(() => user_favorite_businessesWhereUniqueInputSchema),
					z.lazy(() => user_favorite_businessesWhereUniqueInputSchema).array(),
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => user_favorite_businessesWhereUniqueInputSchema),
					z.lazy(() => user_favorite_businessesWhereUniqueInputSchema).array(),
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => user_favorite_businessesWhereUniqueInputSchema),
					z.lazy(() => user_favorite_businessesWhereUniqueInputSchema).array(),
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => user_favorite_businessesWhereUniqueInputSchema),
					z.lazy(() => user_favorite_businessesWhereUniqueInputSchema).array(),
				])
				.optional(),
			update: z
				.union([
					z.lazy(() => user_favorite_businessesUpdateWithWhereUniqueWithoutUsersInputSchema),
					z.lazy(() => user_favorite_businessesUpdateWithWhereUniqueWithoutUsersInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => user_favorite_businessesUpdateManyWithWhereWithoutUsersInputSchema),
					z.lazy(() => user_favorite_businessesUpdateManyWithWhereWithoutUsersInputSchema).array(),
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => user_favorite_businessesScalarWhereInputSchema),
					z.lazy(() => user_favorite_businessesScalarWhereInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default user_favorite_businessesUpdateManyWithoutUsersNestedInputSchema;
