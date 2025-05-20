import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { word_buyCreateWithoutBusinessInputSchema } from './word_buyCreateWithoutBusinessInputSchema';
import { word_buyUncheckedCreateWithoutBusinessInputSchema } from './word_buyUncheckedCreateWithoutBusinessInputSchema';
import { word_buyCreateOrConnectWithoutBusinessInputSchema } from './word_buyCreateOrConnectWithoutBusinessInputSchema';
import { word_buyCreateManyBusinessInputEnvelopeSchema } from './word_buyCreateManyBusinessInputEnvelopeSchema';
import { word_buyWhereUniqueInputSchema } from './word_buyWhereUniqueInputSchema';

export const word_buyCreateNestedManyWithoutBusinessInputSchema: z.ZodType<Prisma.word_buyCreateNestedManyWithoutBusinessInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => word_buyCreateWithoutBusinessInputSchema),
					z.lazy(() => word_buyCreateWithoutBusinessInputSchema).array(),
					z.lazy(() => word_buyUncheckedCreateWithoutBusinessInputSchema),
					z.lazy(() => word_buyUncheckedCreateWithoutBusinessInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => word_buyCreateOrConnectWithoutBusinessInputSchema),
					z.lazy(() => word_buyCreateOrConnectWithoutBusinessInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => word_buyCreateManyBusinessInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => word_buyWhereUniqueInputSchema),
					z.lazy(() => word_buyWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default word_buyCreateNestedManyWithoutBusinessInputSchema;
