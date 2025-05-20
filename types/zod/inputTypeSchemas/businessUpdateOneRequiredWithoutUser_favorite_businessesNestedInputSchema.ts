import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessCreateWithoutUser_favorite_businessesInputSchema } from './businessCreateWithoutUser_favorite_businessesInputSchema';
import { businessUncheckedCreateWithoutUser_favorite_businessesInputSchema } from './businessUncheckedCreateWithoutUser_favorite_businessesInputSchema';
import { businessCreateOrConnectWithoutUser_favorite_businessesInputSchema } from './businessCreateOrConnectWithoutUser_favorite_businessesInputSchema';
import { businessUpsertWithoutUser_favorite_businessesInputSchema } from './businessUpsertWithoutUser_favorite_businessesInputSchema';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';
import { businessUpdateToOneWithWhereWithoutUser_favorite_businessesInputSchema } from './businessUpdateToOneWithWhereWithoutUser_favorite_businessesInputSchema';
import { businessUpdateWithoutUser_favorite_businessesInputSchema } from './businessUpdateWithoutUser_favorite_businessesInputSchema';
import { businessUncheckedUpdateWithoutUser_favorite_businessesInputSchema } from './businessUncheckedUpdateWithoutUser_favorite_businessesInputSchema';

export const businessUpdateOneRequiredWithoutUser_favorite_businessesNestedInputSchema: z.ZodType<Prisma.businessUpdateOneRequiredWithoutUser_favorite_businessesNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => businessCreateWithoutUser_favorite_businessesInputSchema),
					z.lazy(() => businessUncheckedCreateWithoutUser_favorite_businessesInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => businessCreateOrConnectWithoutUser_favorite_businessesInputSchema).optional(),
			upsert: z.lazy(() => businessUpsertWithoutUser_favorite_businessesInputSchema).optional(),
			connect: z.lazy(() => businessWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => businessUpdateToOneWithWhereWithoutUser_favorite_businessesInputSchema),
					z.lazy(() => businessUpdateWithoutUser_favorite_businessesInputSchema),
					z.lazy(() => businessUncheckedUpdateWithoutUser_favorite_businessesInputSchema),
				])
				.optional(),
		})
		.strict();

export default businessUpdateOneRequiredWithoutUser_favorite_businessesNestedInputSchema;
