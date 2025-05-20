import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateWithoutReviewableInputSchema } from './usersCreateWithoutReviewableInputSchema';
import { usersUncheckedCreateWithoutReviewableInputSchema } from './usersUncheckedCreateWithoutReviewableInputSchema';
import { usersCreateOrConnectWithoutReviewableInputSchema } from './usersCreateOrConnectWithoutReviewableInputSchema';
import { usersCreateManyReviewableInputEnvelopeSchema } from './usersCreateManyReviewableInputEnvelopeSchema';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';

export const usersCreateNestedManyWithoutReviewableInputSchema: z.ZodType<Prisma.usersCreateNestedManyWithoutReviewableInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => usersCreateWithoutReviewableInputSchema),
					z.lazy(() => usersCreateWithoutReviewableInputSchema).array(),
					z.lazy(() => usersUncheckedCreateWithoutReviewableInputSchema),
					z.lazy(() => usersUncheckedCreateWithoutReviewableInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => usersCreateOrConnectWithoutReviewableInputSchema),
					z.lazy(() => usersCreateOrConnectWithoutReviewableInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => usersCreateManyReviewableInputEnvelopeSchema).optional(),
			connect: z
				.union([z.lazy(() => usersWhereUniqueInputSchema), z.lazy(() => usersWhereUniqueInputSchema).array()])
				.optional(),
		})
		.strict();

export default usersCreateNestedManyWithoutReviewableInputSchema;
