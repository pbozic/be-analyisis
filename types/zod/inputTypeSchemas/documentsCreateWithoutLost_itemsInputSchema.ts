import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DOCUMENT_TYPESchema } from './DOCUMENT_TYPESchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { filesCreateNestedManyWithoutDocumentsInputSchema } from './filesCreateNestedManyWithoutDocumentsInputSchema';
import { driversCreateNestedOneWithoutDocumentsInputSchema } from './driversCreateNestedOneWithoutDocumentsInputSchema';
import { delivery_driversCreateNestedOneWithoutDocumentsInputSchema } from './delivery_driversCreateNestedOneWithoutDocumentsInputSchema';
import { businessCreateNestedOneWithoutDocumentsInputSchema } from './businessCreateNestedOneWithoutDocumentsInputSchema';
import { usersCreateNestedOneWithoutDocumentsInputSchema } from './usersCreateNestedOneWithoutDocumentsInputSchema';
import { vehiclesCreateNestedOneWithoutDocumentsInputSchema } from './vehiclesCreateNestedOneWithoutDocumentsInputSchema';
import { menu_itemsCreateNestedOneWithoutDocumentsInputSchema } from './menu_itemsCreateNestedOneWithoutDocumentsInputSchema';
import { transactionsCreateNestedOneWithoutDocumentsInputSchema } from './transactionsCreateNestedOneWithoutDocumentsInputSchema';

export const documentsCreateWithoutLost_itemsInputSchema: z.ZodType<Prisma.documentsCreateWithoutLost_itemsInput> = z
	.object({
		document_id: z.string().uuid().optional(),
		document_type: z.lazy(() => DOCUMENT_TYPESchema),
		created_at: z.coerce.date().optional(),
		updated_at: z.coerce.date().optional(),
		expiration_date: z.coerce.date().optional().nullable(),
		issue_date: z.coerce.date().optional().nullable(),
		additional_info: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
		public: z.boolean().optional(),
		files: z.lazy(() => filesCreateNestedManyWithoutDocumentsInputSchema).optional(),
		drivers: z.lazy(() => driversCreateNestedOneWithoutDocumentsInputSchema).optional(),
		delivery_driver: z.lazy(() => delivery_driversCreateNestedOneWithoutDocumentsInputSchema).optional(),
		business: z.lazy(() => businessCreateNestedOneWithoutDocumentsInputSchema).optional(),
		user: z.lazy(() => usersCreateNestedOneWithoutDocumentsInputSchema).optional(),
		vehicles: z.lazy(() => vehiclesCreateNestedOneWithoutDocumentsInputSchema).optional(),
		menu_items: z.lazy(() => menu_itemsCreateNestedOneWithoutDocumentsInputSchema).optional(),
		transactions: z.lazy(() => transactionsCreateNestedOneWithoutDocumentsInputSchema).optional(),
	})
	.strict();

export default documentsCreateWithoutLost_itemsInputSchema;
