import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';
import { businessCreateWithoutUser_favorite_businessesInputSchema } from './businessCreateWithoutUser_favorite_businessesInputSchema';
import { businessUncheckedCreateWithoutUser_favorite_businessesInputSchema } from './businessUncheckedCreateWithoutUser_favorite_businessesInputSchema';

export const businessCreateOrConnectWithoutUser_favorite_businessesInputSchema: z.ZodType<Prisma.businessCreateOrConnectWithoutUser_favorite_businessesInput> =
	z
		.object({
			where: z.lazy(() => businessWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => businessCreateWithoutUser_favorite_businessesInputSchema),
				z.lazy(() => businessUncheckedCreateWithoutUser_favorite_businessesInputSchema),
			]),
		})
		.strict();

export default businessCreateOrConnectWithoutUser_favorite_businessesInputSchema;
