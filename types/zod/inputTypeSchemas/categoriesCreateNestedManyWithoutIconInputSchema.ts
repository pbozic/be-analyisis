import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { categoriesCreateWithoutIconInputSchema } from './categoriesCreateWithoutIconInputSchema';
import { categoriesUncheckedCreateWithoutIconInputSchema } from './categoriesUncheckedCreateWithoutIconInputSchema';
import { categoriesCreateOrConnectWithoutIconInputSchema } from './categoriesCreateOrConnectWithoutIconInputSchema';
import { categoriesCreateManyIconInputEnvelopeSchema } from './categoriesCreateManyIconInputEnvelopeSchema';
import { categoriesWhereUniqueInputSchema } from './categoriesWhereUniqueInputSchema';

export const categoriesCreateNestedManyWithoutIconInputSchema: z.ZodType<Prisma.categoriesCreateNestedManyWithoutIconInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => categoriesCreateWithoutIconInputSchema),
					z.lazy(() => categoriesCreateWithoutIconInputSchema).array(),
					z.lazy(() => categoriesUncheckedCreateWithoutIconInputSchema),
					z.lazy(() => categoriesUncheckedCreateWithoutIconInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => categoriesCreateOrConnectWithoutIconInputSchema),
					z.lazy(() => categoriesCreateOrConnectWithoutIconInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => categoriesCreateManyIconInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => categoriesWhereUniqueInputSchema),
					z.lazy(() => categoriesWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default categoriesCreateNestedManyWithoutIconInputSchema;
