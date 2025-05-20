import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { delivery_ordersArgsSchema } from '../outputTypeSchemas/delivery_ordersArgsSchema';
import { delivery_driversArgsSchema } from '../outputTypeSchemas/delivery_driversArgsSchema';
import { driversArgsSchema } from '../outputTypeSchemas/driversArgsSchema';

export const delivery_order_sentIncludeSchema: z.ZodType<Prisma.delivery_order_sentInclude> = z
	.object({
		order: z.union([z.boolean(), z.lazy(() => delivery_ordersArgsSchema)]).optional(),
		delivery_driver: z.union([z.boolean(), z.lazy(() => delivery_driversArgsSchema)]).optional(),
		driver: z.union([z.boolean(), z.lazy(() => driversArgsSchema)]).optional(),
	})
	.strict();

export default delivery_order_sentIncludeSchema;
