import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { scoring_pointsCreateWithoutUsersInputSchema } from './scoring_pointsCreateWithoutUsersInputSchema';
import { scoring_pointsUncheckedCreateWithoutUsersInputSchema } from './scoring_pointsUncheckedCreateWithoutUsersInputSchema';
import { scoring_pointsCreateOrConnectWithoutUsersInputSchema } from './scoring_pointsCreateOrConnectWithoutUsersInputSchema';
import { scoring_pointsCreateManyUsersInputEnvelopeSchema } from './scoring_pointsCreateManyUsersInputEnvelopeSchema';
import { scoring_pointsWhereUniqueInputSchema } from './scoring_pointsWhereUniqueInputSchema';

export const scoring_pointsUncheckedCreateNestedManyWithoutUsersInputSchema: z.ZodType<Prisma.scoring_pointsUncheckedCreateNestedManyWithoutUsersInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => scoring_pointsCreateWithoutUsersInputSchema),
					z.lazy(() => scoring_pointsCreateWithoutUsersInputSchema).array(),
					z.lazy(() => scoring_pointsUncheckedCreateWithoutUsersInputSchema),
					z.lazy(() => scoring_pointsUncheckedCreateWithoutUsersInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => scoring_pointsCreateOrConnectWithoutUsersInputSchema),
					z.lazy(() => scoring_pointsCreateOrConnectWithoutUsersInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => scoring_pointsCreateManyUsersInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => scoring_pointsWhereUniqueInputSchema),
					z.lazy(() => scoring_pointsWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default scoring_pointsUncheckedCreateNestedManyWithoutUsersInputSchema;
