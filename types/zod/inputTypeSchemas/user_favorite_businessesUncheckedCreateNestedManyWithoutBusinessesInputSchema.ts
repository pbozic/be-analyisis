import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { user_favorite_businessesCreateWithoutBusinessesInputSchema } from './user_favorite_businessesCreateWithoutBusinessesInputSchema';
import { user_favorite_businessesUncheckedCreateWithoutBusinessesInputSchema } from './user_favorite_businessesUncheckedCreateWithoutBusinessesInputSchema';
import { user_favorite_businessesCreateOrConnectWithoutBusinessesInputSchema } from './user_favorite_businessesCreateOrConnectWithoutBusinessesInputSchema';
import { user_favorite_businessesCreateManyBusinessesInputEnvelopeSchema } from './user_favorite_businessesCreateManyBusinessesInputEnvelopeSchema';
import { user_favorite_businessesWhereUniqueInputSchema } from './user_favorite_businessesWhereUniqueInputSchema';

export const user_favorite_businessesUncheckedCreateNestedManyWithoutBusinessesInputSchema: z.ZodType<Prisma.user_favorite_businessesUncheckedCreateNestedManyWithoutBusinessesInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => user_favorite_businessesCreateWithoutBusinessesInputSchema),
					z.lazy(() => user_favorite_businessesCreateWithoutBusinessesInputSchema).array(),
					z.lazy(() => user_favorite_businessesUncheckedCreateWithoutBusinessesInputSchema),
					z.lazy(() => user_favorite_businessesUncheckedCreateWithoutBusinessesInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => user_favorite_businessesCreateOrConnectWithoutBusinessesInputSchema),
					z.lazy(() => user_favorite_businessesCreateOrConnectWithoutBusinessesInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => user_favorite_businessesCreateManyBusinessesInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => user_favorite_businessesWhereUniqueInputSchema),
					z.lazy(() => user_favorite_businessesWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default user_favorite_businessesUncheckedCreateNestedManyWithoutBusinessesInputSchema;
