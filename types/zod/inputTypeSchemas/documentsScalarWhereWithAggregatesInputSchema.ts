import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { EnumDOCUMENT_TYPEWithAggregatesFilterSchema } from './EnumDOCUMENT_TYPEWithAggregatesFilterSchema';
import { DOCUMENT_TYPESchema } from './DOCUMENT_TYPESchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema';
import { JsonNullableWithAggregatesFilterSchema } from './JsonNullableWithAggregatesFilterSchema';
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema';
import { UuidNullableWithAggregatesFilterSchema } from './UuidNullableWithAggregatesFilterSchema';

export const documentsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.documentsScalarWhereWithAggregatesInput> =
	z
		.object({
			AND: z
				.union([
					z.lazy(() => documentsScalarWhereWithAggregatesInputSchema),
					z.lazy(() => documentsScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			OR: z
				.lazy(() => documentsScalarWhereWithAggregatesInputSchema)
				.array()
				.optional(),
			NOT: z
				.union([
					z.lazy(() => documentsScalarWhereWithAggregatesInputSchema),
					z.lazy(() => documentsScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			document_id: z.union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()]).optional(),
			document_type: z
				.union([z.lazy(() => EnumDOCUMENT_TYPEWithAggregatesFilterSchema), z.lazy(() => DOCUMENT_TYPESchema)])
				.optional(),
			created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
			updated_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
			expiration_date: z
				.union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date()])
				.optional()
				.nullable(),
			issue_date: z
				.union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date()])
				.optional()
				.nullable(),
			additional_info: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
			public: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
			driver_id: z
				.union([z.lazy(() => UuidNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			delivery_driver_id: z
				.union([z.lazy(() => UuidNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			business_id: z
				.union([z.lazy(() => UuidNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			user_id: z
				.union([z.lazy(() => UuidNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			vehicle_id: z
				.union([z.lazy(() => UuidNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			menu_item_id: z
				.union([z.lazy(() => UuidNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			lost_item_id: z
				.union([z.lazy(() => UuidNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			transaction_id: z
				.union([z.lazy(() => UuidNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
		})
		.strict();

export default documentsScalarWhereWithAggregatesInputSchema;
