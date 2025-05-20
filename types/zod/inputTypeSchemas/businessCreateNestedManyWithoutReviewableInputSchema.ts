import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessCreateWithoutReviewableInputSchema } from './businessCreateWithoutReviewableInputSchema';
import { businessUncheckedCreateWithoutReviewableInputSchema } from './businessUncheckedCreateWithoutReviewableInputSchema';
import { businessCreateOrConnectWithoutReviewableInputSchema } from './businessCreateOrConnectWithoutReviewableInputSchema';
import { businessCreateManyReviewableInputEnvelopeSchema } from './businessCreateManyReviewableInputEnvelopeSchema';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';

export const businessCreateNestedManyWithoutReviewableInputSchema: z.ZodType<Prisma.businessCreateNestedManyWithoutReviewableInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => businessCreateWithoutReviewableInputSchema),
					z.lazy(() => businessCreateWithoutReviewableInputSchema).array(),
					z.lazy(() => businessUncheckedCreateWithoutReviewableInputSchema),
					z.lazy(() => businessUncheckedCreateWithoutReviewableInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => businessCreateOrConnectWithoutReviewableInputSchema),
					z.lazy(() => businessCreateOrConnectWithoutReviewableInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => businessCreateManyReviewableInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => businessWhereUniqueInputSchema),
					z.lazy(() => businessWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default businessCreateNestedManyWithoutReviewableInputSchema;
