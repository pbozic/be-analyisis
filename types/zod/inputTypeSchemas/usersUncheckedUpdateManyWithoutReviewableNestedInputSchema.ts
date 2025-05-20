import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateWithoutReviewableInputSchema } from './usersCreateWithoutReviewableInputSchema';
import { usersUncheckedCreateWithoutReviewableInputSchema } from './usersUncheckedCreateWithoutReviewableInputSchema';
import { usersCreateOrConnectWithoutReviewableInputSchema } from './usersCreateOrConnectWithoutReviewableInputSchema';
import { usersUpsertWithWhereUniqueWithoutReviewableInputSchema } from './usersUpsertWithWhereUniqueWithoutReviewableInputSchema';
import { usersCreateManyReviewableInputEnvelopeSchema } from './usersCreateManyReviewableInputEnvelopeSchema';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersUpdateWithWhereUniqueWithoutReviewableInputSchema } from './usersUpdateWithWhereUniqueWithoutReviewableInputSchema';
import { usersUpdateManyWithWhereWithoutReviewableInputSchema } from './usersUpdateManyWithWhereWithoutReviewableInputSchema';
import { usersScalarWhereInputSchema } from './usersScalarWhereInputSchema';

export const usersUncheckedUpdateManyWithoutReviewableNestedInputSchema: z.ZodType<Prisma.usersUncheckedUpdateManyWithoutReviewableNestedInput> =
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
			upsert: z
				.union([
					z.lazy(() => usersUpsertWithWhereUniqueWithoutReviewableInputSchema),
					z.lazy(() => usersUpsertWithWhereUniqueWithoutReviewableInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => usersCreateManyReviewableInputEnvelopeSchema).optional(),
			set: z
				.union([z.lazy(() => usersWhereUniqueInputSchema), z.lazy(() => usersWhereUniqueInputSchema).array()])
				.optional(),
			disconnect: z
				.union([z.lazy(() => usersWhereUniqueInputSchema), z.lazy(() => usersWhereUniqueInputSchema).array()])
				.optional(),
			delete: z
				.union([z.lazy(() => usersWhereUniqueInputSchema), z.lazy(() => usersWhereUniqueInputSchema).array()])
				.optional(),
			connect: z
				.union([z.lazy(() => usersWhereUniqueInputSchema), z.lazy(() => usersWhereUniqueInputSchema).array()])
				.optional(),
			update: z
				.union([
					z.lazy(() => usersUpdateWithWhereUniqueWithoutReviewableInputSchema),
					z.lazy(() => usersUpdateWithWhereUniqueWithoutReviewableInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => usersUpdateManyWithWhereWithoutReviewableInputSchema),
					z.lazy(() => usersUpdateManyWithWhereWithoutReviewableInputSchema).array(),
				])
				.optional(),
			deleteMany: z
				.union([z.lazy(() => usersScalarWhereInputSchema), z.lazy(() => usersScalarWhereInputSchema).array()])
				.optional(),
		})
		.strict();

export default usersUncheckedUpdateManyWithoutReviewableNestedInputSchema;
