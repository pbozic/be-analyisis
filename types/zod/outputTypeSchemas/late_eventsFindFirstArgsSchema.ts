import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { late_eventsIncludeSchema } from '../inputTypeSchemas/late_eventsIncludeSchema';
import { late_eventsWhereInputSchema } from '../inputTypeSchemas/late_eventsWhereInputSchema';
import { late_eventsOrderByWithRelationInputSchema } from '../inputTypeSchemas/late_eventsOrderByWithRelationInputSchema';
import { late_eventsWhereUniqueInputSchema } from '../inputTypeSchemas/late_eventsWhereUniqueInputSchema';
import { Late_eventsScalarFieldEnumSchema } from '../inputTypeSchemas/Late_eventsScalarFieldEnumSchema';
import { usersArgsSchema } from '../outputTypeSchemas/usersArgsSchema';
import { businessArgsSchema } from '../outputTypeSchemas/businessArgsSchema';
import { delivery_ordersArgsSchema } from '../outputTypeSchemas/delivery_ordersArgsSchema';
import { taxi_ordersArgsSchema } from '../outputTypeSchemas/taxi_ordersArgsSchema';
import { scoring_pointsArgsSchema } from '../outputTypeSchemas/scoring_pointsArgsSchema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const late_eventsSelectSchema: z.ZodType<Prisma.late_eventsSelect> = z
	.object({
		late_events_id: z.boolean().optional(),
		business_id: z.boolean().optional(),
		user_id: z.boolean().optional(),
		delivery_order_id: z.boolean().optional(),
		taxi_order_id: z.boolean().optional(),
		scoring_points_id: z.boolean().optional(),
		seconds: z.boolean().optional(),
		created_at: z.boolean().optional(),
		updated_at: z.boolean().optional(),
		users: z.union([z.boolean(), z.lazy(() => usersArgsSchema)]).optional(),
		businesses: z.union([z.boolean(), z.lazy(() => businessArgsSchema)]).optional(),
		delivery_orders: z.union([z.boolean(), z.lazy(() => delivery_ordersArgsSchema)]).optional(),
		taxi_orders: z.union([z.boolean(), z.lazy(() => taxi_ordersArgsSchema)]).optional(),
		scoring_points: z.union([z.boolean(), z.lazy(() => scoring_pointsArgsSchema)]).optional(),
	})
	.strict();

export const late_eventsFindFirstArgsSchema: z.ZodType<Prisma.late_eventsFindFirstArgs> = z
	.object({
		select: late_eventsSelectSchema.optional(),
		include: late_eventsIncludeSchema.optional(),
		where: late_eventsWhereInputSchema.optional(),
		orderBy: z
			.union([late_eventsOrderByWithRelationInputSchema.array(), late_eventsOrderByWithRelationInputSchema])
			.optional(),
		cursor: late_eventsWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z.union([Late_eventsScalarFieldEnumSchema, Late_eventsScalarFieldEnumSchema.array()]).optional(),
	})
	.strict();

export default late_eventsFindFirstArgsSchema;
