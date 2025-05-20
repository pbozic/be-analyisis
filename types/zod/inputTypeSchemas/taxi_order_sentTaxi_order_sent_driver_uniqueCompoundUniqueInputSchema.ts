import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const taxi_order_sentTaxi_order_sent_driver_uniqueCompoundUniqueInputSchema: z.ZodType<Prisma.taxi_order_sentTaxi_order_sent_driver_uniqueCompoundUniqueInput> =
	z
		.object({
			order_id: z.string(),
			driver_id: z.string(),
		})
		.strict();

export default taxi_order_sentTaxi_order_sent_driver_uniqueCompoundUniqueInputSchema;
