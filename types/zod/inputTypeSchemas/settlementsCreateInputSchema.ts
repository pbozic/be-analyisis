import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { municipalitiesCreateNestedOneWithoutSettlementsInputSchema } from './municipalitiesCreateNestedOneWithoutSettlementsInputSchema';
import { weather_dataCreateNestedManyWithoutSettlementInputSchema } from './weather_dataCreateNestedManyWithoutSettlementInputSchema';

export const settlementsCreateInputSchema: z.ZodType<Prisma.settlementsCreateInput> = z
	.object({
		settlement_id: z.string().uuid().optional(),
		name: z.string(),
		eid_naselje: z.string().optional().nullable(),
		feature_id: z.string().optional().nullable(),
		geojson: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]),
		created_at: z.coerce.date().optional(),
		updated_at: z.coerce.date().optional(),
		municipality: z.lazy(() => municipalitiesCreateNestedOneWithoutSettlementsInputSchema),
		weather_data: z.lazy(() => weather_dataCreateNestedManyWithoutSettlementInputSchema).optional(),
	})
	.strict();

export default settlementsCreateInputSchema;
