import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { filesCreateWithoutCategoriesInputSchema } from './filesCreateWithoutCategoriesInputSchema';
import { filesUncheckedCreateWithoutCategoriesInputSchema } from './filesUncheckedCreateWithoutCategoriesInputSchema';
import { filesCreateOrConnectWithoutCategoriesInputSchema } from './filesCreateOrConnectWithoutCategoriesInputSchema';
import { filesUpsertWithoutCategoriesInputSchema } from './filesUpsertWithoutCategoriesInputSchema';
import { filesWhereInputSchema } from './filesWhereInputSchema';
import { filesWhereUniqueInputSchema } from './filesWhereUniqueInputSchema';
import { filesUpdateToOneWithWhereWithoutCategoriesInputSchema } from './filesUpdateToOneWithWhereWithoutCategoriesInputSchema';
import { filesUpdateWithoutCategoriesInputSchema } from './filesUpdateWithoutCategoriesInputSchema';
import { filesUncheckedUpdateWithoutCategoriesInputSchema } from './filesUncheckedUpdateWithoutCategoriesInputSchema';

export const filesUpdateOneWithoutCategoriesNestedInputSchema: z.ZodType<Prisma.filesUpdateOneWithoutCategoriesNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => filesCreateWithoutCategoriesInputSchema),
					z.lazy(() => filesUncheckedCreateWithoutCategoriesInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => filesCreateOrConnectWithoutCategoriesInputSchema).optional(),
			upsert: z.lazy(() => filesUpsertWithoutCategoriesInputSchema).optional(),
			disconnect: z.union([z.boolean(), z.lazy(() => filesWhereInputSchema)]).optional(),
			delete: z.union([z.boolean(), z.lazy(() => filesWhereInputSchema)]).optional(),
			connect: z.lazy(() => filesWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => filesUpdateToOneWithWhereWithoutCategoriesInputSchema),
					z.lazy(() => filesUpdateWithoutCategoriesInputSchema),
					z.lazy(() => filesUncheckedUpdateWithoutCategoriesInputSchema),
				])
				.optional(),
		})
		.strict();

export default filesUpdateOneWithoutCategoriesNestedInputSchema;
