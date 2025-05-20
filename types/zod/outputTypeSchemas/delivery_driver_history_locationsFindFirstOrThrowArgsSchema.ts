import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { delivery_driver_history_locationsIncludeSchema } from '../inputTypeSchemas/delivery_driver_history_locationsIncludeSchema';
import { delivery_driver_history_locationsWhereInputSchema } from '../inputTypeSchemas/delivery_driver_history_locationsWhereInputSchema';
import { delivery_driver_history_locationsOrderByWithRelationInputSchema } from '../inputTypeSchemas/delivery_driver_history_locationsOrderByWithRelationInputSchema';
import { delivery_driver_history_locationsWhereUniqueInputSchema } from '../inputTypeSchemas/delivery_driver_history_locationsWhereUniqueInputSchema';
import { Delivery_driver_history_locationsScalarFieldEnumSchema } from '../inputTypeSchemas/Delivery_driver_history_locationsScalarFieldEnumSchema';
import { delivery_driversArgsSchema } from '../outputTypeSchemas/delivery_driversArgsSchema';
import { delivery_ordersArgsSchema } from '../outputTypeSchemas/delivery_ordersArgsSchema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const delivery_driver_history_locationsSelectSchema: z.ZodType<Prisma.delivery_driver_history_locationsSelect> =
	z
		.object({
			delivery_driver_history_location_id: z.boolean().optional(),
			delivery_driver_id: z.boolean().optional(),
			order_id: z.boolean().optional(),
			status: z.boolean().optional(),
			location: z.boolean().optional(),
			created_at: z.boolean().optional(),
			updated_at: z.boolean().optional(),
			delivery_driver: z.union([z.boolean(), z.lazy(() => delivery_driversArgsSchema)]).optional(),
			order: z.union([z.boolean(), z.lazy(() => delivery_ordersArgsSchema)]).optional(),
		})
		.strict();

export const delivery_driver_history_locationsFindFirstOrThrowArgsSchema: z.ZodType<Prisma.delivery_driver_history_locationsFindFirstOrThrowArgs> =
	z
		.object({
			select: delivery_driver_history_locationsSelectSchema.optional(),
			include: delivery_driver_history_locationsIncludeSchema.optional(),
			where: delivery_driver_history_locationsWhereInputSchema.optional(),
			orderBy: z
				.union([
					delivery_driver_history_locationsOrderByWithRelationInputSchema.array(),
					delivery_driver_history_locationsOrderByWithRelationInputSchema,
				])
				.optional(),
			cursor: delivery_driver_history_locationsWhereUniqueInputSchema.optional(),
			take: z.number().optional(),
			skip: z.number().optional(),
			distinct: z
				.union([
					Delivery_driver_history_locationsScalarFieldEnumSchema,
					Delivery_driver_history_locationsScalarFieldEnumSchema.array(),
				])
				.optional(),
		})
		.strict();

export default delivery_driver_history_locationsFindFirstOrThrowArgsSchema;
