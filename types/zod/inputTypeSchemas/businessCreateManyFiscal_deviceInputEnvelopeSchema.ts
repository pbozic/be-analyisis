import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessCreateManyFiscal_deviceInputSchema } from './businessCreateManyFiscal_deviceInputSchema';

export const businessCreateManyFiscal_deviceInputEnvelopeSchema: z.ZodType<Prisma.businessCreateManyFiscal_deviceInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => businessCreateManyFiscal_deviceInputSchema),
				z.lazy(() => businessCreateManyFiscal_deviceInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();

export default businessCreateManyFiscal_deviceInputEnvelopeSchema;
