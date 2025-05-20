import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DOCUMENT_TYPESchema } from './DOCUMENT_TYPESchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { filesUncheckedCreateNestedManyWithoutDocumentsInputSchema } from './filesUncheckedCreateNestedManyWithoutDocumentsInputSchema';

export const documentsUncheckedCreateWithoutTransactionsInputSchema: z.ZodType<Prisma.documentsUncheckedCreateWithoutTransactionsInput> =
	z
		.object({
			document_id: z.string().uuid().optional(),
			document_type: z.lazy(() => DOCUMENT_TYPESchema),
			created_at: z.coerce.date().optional(),
			updated_at: z.coerce.date().optional(),
			expiration_date: z.coerce.date().optional().nullable(),
			issue_date: z.coerce.date().optional().nullable(),
			additional_info: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
			public: z.boolean().optional(),
			driver_id: z.string().optional().nullable(),
			delivery_driver_id: z.string().optional().nullable(),
			business_id: z.string().optional().nullable(),
			user_id: z.string().optional().nullable(),
			vehicle_id: z.string().optional().nullable(),
			menu_item_id: z.string().optional().nullable(),
			lost_item_id: z.string().optional().nullable(),
			files: z.lazy(() => filesUncheckedCreateNestedManyWithoutDocumentsInputSchema).optional(),
		})
		.strict();

export default documentsUncheckedCreateWithoutTransactionsInputSchema;
