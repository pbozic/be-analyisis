import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { translationsCreateManyTranslatableInputSchema } from './translationsCreateManyTranslatableInputSchema';

export const translationsCreateManyTranslatableInputEnvelopeSchema: z.ZodType<Prisma.translationsCreateManyTranslatableInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => translationsCreateManyTranslatableInputSchema),
				z.lazy(() => translationsCreateManyTranslatableInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();

export default translationsCreateManyTranslatableInputEnvelopeSchema;
