import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const delivery_order_sentDelivery_order_sent_driver_uniqueCompoundUniqueInputSchema: z.ZodType<Prisma.delivery_order_sentDelivery_order_sent_driver_uniqueCompoundUniqueInput> = z.object({
  order_id: z.string(),
  driver_id: z.string()
}).strict();

export default delivery_order_sentDelivery_order_sent_driver_uniqueCompoundUniqueInputSchema;
