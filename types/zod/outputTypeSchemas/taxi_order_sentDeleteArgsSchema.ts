import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { taxi_order_sentIncludeSchema } from '../inputTypeSchemas/taxi_order_sentIncludeSchema';
import { taxi_order_sentWhereUniqueInputSchema } from '../inputTypeSchemas/taxi_order_sentWhereUniqueInputSchema';
import { taxi_ordersArgsSchema } from '../outputTypeSchemas/taxi_ordersArgsSchema';
import { driversArgsSchema } from '../outputTypeSchemas/driversArgsSchema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const taxi_order_sentSelectSchema: z.ZodType<Prisma.taxi_order_sentSelect> = z
	.object({
		taxi_order_sent_id: z.boolean().optional(),
		order_id: z.boolean().optional(),
		driver_id: z.boolean().optional(),
		accepted: z.boolean().optional(),
		location: z.boolean().optional(),
		timeline: z.boolean().optional(),
		created_at: z.boolean().optional(),
		updated_at: z.boolean().optional(),
		rejected: z.boolean().optional(),
		order: z.union([z.boolean(), z.lazy(() => taxi_ordersArgsSchema)]).optional(),
		driver: z.union([z.boolean(), z.lazy(() => driversArgsSchema)]).optional(),
	})
	.strict();

export const taxi_order_sentDeleteArgsSchema: z.ZodType<Prisma.taxi_order_sentDeleteArgs> = z
	.object({
		select: taxi_order_sentSelectSchema.optional(),
		include: taxi_order_sentIncludeSchema.optional(),
		where: taxi_order_sentWhereUniqueInputSchema,
	})
	.strict();

export default taxi_order_sentDeleteArgsSchema;
