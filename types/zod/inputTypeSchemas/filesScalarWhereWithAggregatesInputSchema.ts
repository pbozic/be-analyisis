import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { EnumFILE_TYPEWithAggregatesFilterSchema } from './EnumFILE_TYPEWithAggregatesFilterSchema';
import { FILE_TYPESchema } from './FILE_TYPESchema';
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { UuidNullableWithAggregatesFilterSchema } from './UuidNullableWithAggregatesFilterSchema';

export const filesScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.filesScalarWhereWithAggregatesInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => filesScalarWhereWithAggregatesInputSchema),
				z.lazy(() => filesScalarWhereWithAggregatesInputSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => filesScalarWhereWithAggregatesInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => filesScalarWhereWithAggregatesInputSchema),
				z.lazy(() => filesScalarWhereWithAggregatesInputSchema).array(),
			])
			.optional(),
		file_id: z.union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()]).optional(),
		url: z
			.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
			.optional()
			.nullable(),
		file_type: z
			.union([z.lazy(() => EnumFILE_TYPEWithAggregatesFilterSchema), z.lazy(() => FILE_TYPESchema)])
			.optional(),
		public: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
		mime_type: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
		created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
		updated_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
		document_id: z
			.union([z.lazy(() => UuidNullableWithAggregatesFilterSchema), z.string()])
			.optional()
			.nullable(),
	})
	.strict();

export default filesScalarWhereWithAggregatesInputSchema;
