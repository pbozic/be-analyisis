import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { delivery_order_sentIncludeSchema } from '../inputTypeSchemas/delivery_order_sentIncludeSchema';
import { delivery_order_sentWhereInputSchema } from '../inputTypeSchemas/delivery_order_sentWhereInputSchema';
import { delivery_order_sentOrderByWithRelationInputSchema } from '../inputTypeSchemas/delivery_order_sentOrderByWithRelationInputSchema';
import { delivery_order_sentWhereUniqueInputSchema } from '../inputTypeSchemas/delivery_order_sentWhereUniqueInputSchema';
import { Delivery_order_sentScalarFieldEnumSchema } from '../inputTypeSchemas/Delivery_order_sentScalarFieldEnumSchema';
import { delivery_ordersArgsSchema } from '../outputTypeSchemas/delivery_ordersArgsSchema';
import { delivery_driversArgsSchema } from '../outputTypeSchemas/delivery_driversArgsSchema';
import { driversArgsSchema } from '../outputTypeSchemas/driversArgsSchema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const delivery_order_sentSelectSchema: z.ZodType<Prisma.delivery_order_sentSelect> = z
	.object({
		delivery_order_sent_id: z.boolean().optional(),
		order_id: z.boolean().optional(),
		accepted: z.boolean().optional(),
		location: z.boolean().optional(),
		timeline: z.boolean().optional(),
		created_at: z.boolean().optional(),
		updated_at: z.boolean().optional(),
		delivery_driver_id: z.boolean().optional(),
		driver_id: z.boolean().optional(),
		order: z.union([z.boolean(), z.lazy(() => delivery_ordersArgsSchema)]).optional(),
		delivery_driver: z.union([z.boolean(), z.lazy(() => delivery_driversArgsSchema)]).optional(),
		driver: z.union([z.boolean(), z.lazy(() => driversArgsSchema)]).optional(),
	})
	.strict();

export const delivery_order_sentFindFirstArgsSchema: z.ZodType<Prisma.delivery_order_sentFindFirstArgs> = z
	.object({
		select: delivery_order_sentSelectSchema.optional(),
		include: delivery_order_sentIncludeSchema.optional(),
		where: delivery_order_sentWhereInputSchema.optional(),
		orderBy: z
			.union([
				delivery_order_sentOrderByWithRelationInputSchema.array(),
				delivery_order_sentOrderByWithRelationInputSchema,
			])
			.optional(),
		cursor: delivery_order_sentWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z
			.union([Delivery_order_sentScalarFieldEnumSchema, Delivery_order_sentScalarFieldEnumSchema.array()])
			.optional(),
	})
	.strict();

export default delivery_order_sentFindFirstArgsSchema;
