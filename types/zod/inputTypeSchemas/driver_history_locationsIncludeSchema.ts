import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { driversArgsSchema } from '../outputTypeSchemas/driversArgsSchema';
import { taxi_ordersArgsSchema } from '../outputTypeSchemas/taxi_ordersArgsSchema';
import { delivery_ordersArgsSchema } from '../outputTypeSchemas/delivery_ordersArgsSchema';

export const driver_history_locationsIncludeSchema: z.ZodType<Prisma.driver_history_locationsInclude> = z
	.object({
		driver: z.union([z.boolean(), z.lazy(() => driversArgsSchema)]).optional(),
		order: z.union([z.boolean(), z.lazy(() => taxi_ordersArgsSchema)]).optional(),
		delivery_order: z.union([z.boolean(), z.lazy(() => delivery_ordersArgsSchema)]).optional(),
	})
	.strict();

export default driver_history_locationsIncludeSchema;
