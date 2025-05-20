import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { taxi_ordersArgsSchema } from '../outputTypeSchemas/taxi_ordersArgsSchema';
import { driversArgsSchema } from '../outputTypeSchemas/driversArgsSchema';

export const taxi_order_sentIncludeSchema: z.ZodType<Prisma.taxi_order_sentInclude> = z
	.object({
		order: z.union([z.boolean(), z.lazy(() => taxi_ordersArgsSchema)]).optional(),
		driver: z.union([z.boolean(), z.lazy(() => driversArgsSchema)]).optional(),
	})
	.strict();

export default taxi_order_sentIncludeSchema;
