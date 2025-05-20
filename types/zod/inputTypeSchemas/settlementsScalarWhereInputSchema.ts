import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { JsonFilterSchema } from './JsonFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const settlementsScalarWhereInputSchema: z.ZodType<Prisma.settlementsScalarWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => settlementsScalarWhereInputSchema),
				z.lazy(() => settlementsScalarWhereInputSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => settlementsScalarWhereInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => settlementsScalarWhereInputSchema),
				z.lazy(() => settlementsScalarWhereInputSchema).array(),
			])
			.optional(),
		settlement_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
		name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		municipalities_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
		eid_naselje: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		feature_id: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		geojson: z.lazy(() => JsonFilterSchema).optional(),
		created_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		updated_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
	})
	.strict();

export default settlementsScalarWhereInputSchema;
