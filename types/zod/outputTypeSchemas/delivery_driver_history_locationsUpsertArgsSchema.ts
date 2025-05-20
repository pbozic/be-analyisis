import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { delivery_driver_history_locationsIncludeSchema } from '../inputTypeSchemas/delivery_driver_history_locationsIncludeSchema';
import { delivery_driver_history_locationsWhereUniqueInputSchema } from '../inputTypeSchemas/delivery_driver_history_locationsWhereUniqueInputSchema';
import { delivery_driver_history_locationsCreateInputSchema } from '../inputTypeSchemas/delivery_driver_history_locationsCreateInputSchema';
import { delivery_driver_history_locationsUncheckedCreateInputSchema } from '../inputTypeSchemas/delivery_driver_history_locationsUncheckedCreateInputSchema';
import { delivery_driver_history_locationsUpdateInputSchema } from '../inputTypeSchemas/delivery_driver_history_locationsUpdateInputSchema';
import { delivery_driver_history_locationsUncheckedUpdateInputSchema } from '../inputTypeSchemas/delivery_driver_history_locationsUncheckedUpdateInputSchema';
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

export const delivery_driver_history_locationsUpsertArgsSchema: z.ZodType<Prisma.delivery_driver_history_locationsUpsertArgs> =
	z
		.object({
			select: delivery_driver_history_locationsSelectSchema.optional(),
			include: delivery_driver_history_locationsIncludeSchema.optional(),
			where: delivery_driver_history_locationsWhereUniqueInputSchema,
			create: z.union([
				delivery_driver_history_locationsCreateInputSchema,
				delivery_driver_history_locationsUncheckedCreateInputSchema,
			]),
			update: z.union([
				delivery_driver_history_locationsUpdateInputSchema,
				delivery_driver_history_locationsUncheckedUpdateInputSchema,
			]),
		})
		.strict();

export default delivery_driver_history_locationsUpsertArgsSchema;
