import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';

export const driver_history_locationsCreateManyOrderInputSchema: z.ZodType<Prisma.driver_history_locationsCreateManyOrderInput> =
	z
		.object({
			driver_history_location_id: z.string().uuid().optional(),
			driver_id: z.string(),
			delivery_order_id: z.string().optional().nullable(),
			status: z.string().optional().nullable(),
			location: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
			created_at: z.coerce.date().optional(),
			updated_at: z.coerce.date().optional(),
		})
		.strict();

export default driver_history_locationsCreateManyOrderInputSchema;
