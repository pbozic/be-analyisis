import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { reviewsCreateWithoutAuthorInputSchema } from './reviewsCreateWithoutAuthorInputSchema';
import { reviewsUncheckedCreateWithoutAuthorInputSchema } from './reviewsUncheckedCreateWithoutAuthorInputSchema';
import { reviewsCreateOrConnectWithoutAuthorInputSchema } from './reviewsCreateOrConnectWithoutAuthorInputSchema';
import { reviewsCreateManyAuthorInputEnvelopeSchema } from './reviewsCreateManyAuthorInputEnvelopeSchema';
import { reviewsWhereUniqueInputSchema } from './reviewsWhereUniqueInputSchema';

export const reviewsUncheckedCreateNestedManyWithoutAuthorInputSchema: z.ZodType<Prisma.reviewsUncheckedCreateNestedManyWithoutAuthorInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => reviewsCreateWithoutAuthorInputSchema),
					z.lazy(() => reviewsCreateWithoutAuthorInputSchema).array(),
					z.lazy(() => reviewsUncheckedCreateWithoutAuthorInputSchema),
					z.lazy(() => reviewsUncheckedCreateWithoutAuthorInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => reviewsCreateOrConnectWithoutAuthorInputSchema),
					z.lazy(() => reviewsCreateOrConnectWithoutAuthorInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => reviewsCreateManyAuthorInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => reviewsWhereUniqueInputSchema),
					z.lazy(() => reviewsWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default reviewsUncheckedCreateNestedManyWithoutAuthorInputSchema;
