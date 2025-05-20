import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { UuidNullableWithAggregatesFilterSchema } from './UuidNullableWithAggregatesFilterSchema';
import { BoolNullableWithAggregatesFilterSchema } from './BoolNullableWithAggregatesFilterSchema';
import { EnumVEHICLE_CLASSNullableWithAggregatesFilterSchema } from './EnumVEHICLE_CLASSNullableWithAggregatesFilterSchema';
import { VEHICLE_CLASSSchema } from './VEHICLE_CLASSSchema';
import { EnumVEHICLE_CATEGORYNullableWithAggregatesFilterSchema } from './EnumVEHICLE_CATEGORYNullableWithAggregatesFilterSchema';
import { VEHICLE_CATEGORYSchema } from './VEHICLE_CATEGORYSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const vehiclesScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.vehiclesScalarWhereWithAggregatesInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => vehiclesScalarWhereWithAggregatesInputSchema),
				z.lazy(() => vehiclesScalarWhereWithAggregatesInputSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => vehiclesScalarWhereWithAggregatesInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => vehiclesScalarWhereWithAggregatesInputSchema),
				z.lazy(() => vehiclesScalarWhereWithAggregatesInputSchema).array(),
			])
			.optional(),
		vehicle_id: z.union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()]).optional(),
		business_id: z
			.union([z.lazy(() => UuidNullableWithAggregatesFilterSchema), z.string()])
			.optional()
			.nullable(),
		active: z
			.union([z.lazy(() => BoolNullableWithAggregatesFilterSchema), z.boolean()])
			.optional()
			.nullable(),
		class: z
			.union([
				z.lazy(() => EnumVEHICLE_CLASSNullableWithAggregatesFilterSchema),
				z.lazy(() => VEHICLE_CLASSSchema),
			])
			.optional()
			.nullable(),
		category: z
			.union([
				z.lazy(() => EnumVEHICLE_CATEGORYNullableWithAggregatesFilterSchema),
				z.lazy(() => VEHICLE_CATEGORYSchema),
			])
			.optional()
			.nullable(),
		make: z
			.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
			.optional()
			.nullable(),
		model: z
			.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
			.optional()
			.nullable(),
		color: z
			.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
			.optional()
			.nullable(),
		license_plate: z
			.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
			.optional()
			.nullable(),
		created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
		updated_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
		delivery_driver_id: z
			.union([z.lazy(() => UuidNullableWithAggregatesFilterSchema), z.string()])
			.optional()
			.nullable(),
		vehicle_specification_id: z
			.union([z.lazy(() => UuidNullableWithAggregatesFilterSchema), z.string()])
			.optional()
			.nullable(),
	})
	.strict();

export default vehiclesScalarWhereWithAggregatesInputSchema;
