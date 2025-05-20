import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const delivery_order_sentDelivery_order_sent_delivery_driver_uniqueCompoundUniqueInputSchema: z.ZodType<Prisma.delivery_order_sentDelivery_order_sent_delivery_driver_uniqueCompoundUniqueInput> =
	z
		.object({
			order_id: z.string(),
			delivery_driver_id: z.string(),
		})
		.strict();

export default delivery_order_sentDelivery_order_sent_delivery_driver_uniqueCompoundUniqueInputSchema;
