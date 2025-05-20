import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { EnumDELIVERY_ORDER_STATUSNullableFilterSchema } from './EnumDELIVERY_ORDER_STATUSNullableFilterSchema';
import { DELIVERY_ORDER_STATUSSchema } from './DELIVERY_ORDER_STATUSSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const delivery_driver_history_locationsScalarWhereInputSchema: z.ZodType<Prisma.delivery_driver_history_locationsScalarWhereInput> =
	z
		.object({
			AND: z
				.union([
					z.lazy(() => delivery_driver_history_locationsScalarWhereInputSchema),
					z.lazy(() => delivery_driver_history_locationsScalarWhereInputSchema).array(),
				])
				.optional(),
			OR: z
				.lazy(() => delivery_driver_history_locationsScalarWhereInputSchema)
				.array()
				.optional(),
			NOT: z
				.union([
					z.lazy(() => delivery_driver_history_locationsScalarWhereInputSchema),
					z.lazy(() => delivery_driver_history_locationsScalarWhereInputSchema).array(),
				])
				.optional(),
			delivery_driver_history_location_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
			delivery_driver_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
			order_id: z
				.union([z.lazy(() => UuidNullableFilterSchema), z.string()])
				.optional()
				.nullable(),
			status: z
				.union([
					z.lazy(() => EnumDELIVERY_ORDER_STATUSNullableFilterSchema),
					z.lazy(() => DELIVERY_ORDER_STATUSSchema),
				])
				.optional()
				.nullable(),
			location: z.lazy(() => JsonNullableFilterSchema).optional(),
			created_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
			updated_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		})
		.strict();

export default delivery_driver_history_locationsScalarWhereInputSchema;
