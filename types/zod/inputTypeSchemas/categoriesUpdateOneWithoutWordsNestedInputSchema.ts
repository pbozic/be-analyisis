import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { categoriesCreateWithoutWordsInputSchema } from './categoriesCreateWithoutWordsInputSchema';
import { categoriesUncheckedCreateWithoutWordsInputSchema } from './categoriesUncheckedCreateWithoutWordsInputSchema';
import { categoriesCreateOrConnectWithoutWordsInputSchema } from './categoriesCreateOrConnectWithoutWordsInputSchema';
import { categoriesUpsertWithoutWordsInputSchema } from './categoriesUpsertWithoutWordsInputSchema';
import { categoriesWhereInputSchema } from './categoriesWhereInputSchema';
import { categoriesWhereUniqueInputSchema } from './categoriesWhereUniqueInputSchema';
import { categoriesUpdateToOneWithWhereWithoutWordsInputSchema } from './categoriesUpdateToOneWithWhereWithoutWordsInputSchema';
import { categoriesUpdateWithoutWordsInputSchema } from './categoriesUpdateWithoutWordsInputSchema';
import { categoriesUncheckedUpdateWithoutWordsInputSchema } from './categoriesUncheckedUpdateWithoutWordsInputSchema';

export const categoriesUpdateOneWithoutWordsNestedInputSchema: z.ZodType<Prisma.categoriesUpdateOneWithoutWordsNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => categoriesCreateWithoutWordsInputSchema),
					z.lazy(() => categoriesUncheckedCreateWithoutWordsInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => categoriesCreateOrConnectWithoutWordsInputSchema).optional(),
			upsert: z.lazy(() => categoriesUpsertWithoutWordsInputSchema).optional(),
			disconnect: z.union([z.boolean(), z.lazy(() => categoriesWhereInputSchema)]).optional(),
			delete: z.union([z.boolean(), z.lazy(() => categoriesWhereInputSchema)]).optional(),
			connect: z.lazy(() => categoriesWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => categoriesUpdateToOneWithWhereWithoutWordsInputSchema),
					z.lazy(() => categoriesUpdateWithoutWordsInputSchema),
					z.lazy(() => categoriesUncheckedUpdateWithoutWordsInputSchema),
				])
				.optional(),
		})
		.strict();

export default categoriesUpdateOneWithoutWordsNestedInputSchema;
