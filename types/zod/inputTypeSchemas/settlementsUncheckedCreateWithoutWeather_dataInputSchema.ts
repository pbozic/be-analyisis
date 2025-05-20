import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';

export const settlementsUncheckedCreateWithoutWeather_dataInputSchema: z.ZodType<Prisma.settlementsUncheckedCreateWithoutWeather_dataInput> =
	z
		.object({
			settlement_id: z.string().uuid().optional(),
			name: z.string(),
			municipalities_id: z.string(),
			eid_naselje: z.string().optional().nullable(),
			feature_id: z.string().optional().nullable(),
			geojson: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]),
			created_at: z.coerce.date().optional(),
			updated_at: z.coerce.date().optional(),
		})
		.strict();

export default settlementsUncheckedCreateWithoutWeather_dataInputSchema;
