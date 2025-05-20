import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessCreateWithoutUser_favorite_businessesInputSchema } from './businessCreateWithoutUser_favorite_businessesInputSchema';
import { businessUncheckedCreateWithoutUser_favorite_businessesInputSchema } from './businessUncheckedCreateWithoutUser_favorite_businessesInputSchema';
import { businessCreateOrConnectWithoutUser_favorite_businessesInputSchema } from './businessCreateOrConnectWithoutUser_favorite_businessesInputSchema';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';

export const businessCreateNestedOneWithoutUser_favorite_businessesInputSchema: z.ZodType<Prisma.businessCreateNestedOneWithoutUser_favorite_businessesInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => businessCreateWithoutUser_favorite_businessesInputSchema),
					z.lazy(() => businessUncheckedCreateWithoutUser_favorite_businessesInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => businessCreateOrConnectWithoutUser_favorite_businessesInputSchema).optional(),
			connect: z.lazy(() => businessWhereUniqueInputSchema).optional(),
		})
		.strict();

export default businessCreateNestedOneWithoutUser_favorite_businessesInputSchema;
