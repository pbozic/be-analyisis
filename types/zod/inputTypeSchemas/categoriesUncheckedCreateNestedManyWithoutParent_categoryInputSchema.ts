import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { categoriesCreateWithoutParent_categoryInputSchema } from './categoriesCreateWithoutParent_categoryInputSchema';
import { categoriesUncheckedCreateWithoutParent_categoryInputSchema } from './categoriesUncheckedCreateWithoutParent_categoryInputSchema';
import { categoriesCreateOrConnectWithoutParent_categoryInputSchema } from './categoriesCreateOrConnectWithoutParent_categoryInputSchema';
import { categoriesCreateManyParent_categoryInputEnvelopeSchema } from './categoriesCreateManyParent_categoryInputEnvelopeSchema';
import { categoriesWhereUniqueInputSchema } from './categoriesWhereUniqueInputSchema';

export const categoriesUncheckedCreateNestedManyWithoutParent_categoryInputSchema: z.ZodType<Prisma.categoriesUncheckedCreateNestedManyWithoutParent_categoryInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => categoriesCreateWithoutParent_categoryInputSchema),
					z.lazy(() => categoriesCreateWithoutParent_categoryInputSchema).array(),
					z.lazy(() => categoriesUncheckedCreateWithoutParent_categoryInputSchema),
					z.lazy(() => categoriesUncheckedCreateWithoutParent_categoryInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => categoriesCreateOrConnectWithoutParent_categoryInputSchema),
					z.lazy(() => categoriesCreateOrConnectWithoutParent_categoryInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => categoriesCreateManyParent_categoryInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => categoriesWhereUniqueInputSchema),
					z.lazy(() => categoriesWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default categoriesUncheckedCreateNestedManyWithoutParent_categoryInputSchema;
