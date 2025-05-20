import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { documentsCreateWithoutUserInputSchema } from './documentsCreateWithoutUserInputSchema';
import { documentsUncheckedCreateWithoutUserInputSchema } from './documentsUncheckedCreateWithoutUserInputSchema';
import { documentsCreateOrConnectWithoutUserInputSchema } from './documentsCreateOrConnectWithoutUserInputSchema';
import { documentsCreateManyUserInputEnvelopeSchema } from './documentsCreateManyUserInputEnvelopeSchema';
import { documentsWhereUniqueInputSchema } from './documentsWhereUniqueInputSchema';

export const documentsCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.documentsCreateNestedManyWithoutUserInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => documentsCreateWithoutUserInputSchema),
					z.lazy(() => documentsCreateWithoutUserInputSchema).array(),
					z.lazy(() => documentsUncheckedCreateWithoutUserInputSchema),
					z.lazy(() => documentsUncheckedCreateWithoutUserInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => documentsCreateOrConnectWithoutUserInputSchema),
					z.lazy(() => documentsCreateOrConnectWithoutUserInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => documentsCreateManyUserInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => documentsWhereUniqueInputSchema),
					z.lazy(() => documentsWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default documentsCreateNestedManyWithoutUserInputSchema;
