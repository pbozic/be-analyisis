import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';

export const delivery_order_sentUncheckedCreateInputSchema: z.ZodType<Prisma.delivery_order_sentUncheckedCreateInput> =
	z
		.object({
			delivery_order_sent_id: z.string().uuid().optional(),
			order_id: z.string(),
			accepted: z.boolean().optional(),
			location: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]),
			timeline: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]).optional(),
			created_at: z.coerce.date().optional(),
			updated_at: z.coerce.date().optional(),
			delivery_driver_id: z.string().optional().nullable(),
			driver_id: z.string().optional().nullable(),
		})
		.strict();

export default delivery_order_sentUncheckedCreateInputSchema;
