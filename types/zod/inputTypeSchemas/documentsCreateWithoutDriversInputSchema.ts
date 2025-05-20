import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DOCUMENT_TYPESchema } from './DOCUMENT_TYPESchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { filesCreateNestedManyWithoutDocumentsInputSchema } from './filesCreateNestedManyWithoutDocumentsInputSchema';
import { delivery_driversCreateNestedOneWithoutDocumentsInputSchema } from './delivery_driversCreateNestedOneWithoutDocumentsInputSchema';
import { businessCreateNestedOneWithoutDocumentsInputSchema } from './businessCreateNestedOneWithoutDocumentsInputSchema';
import { usersCreateNestedOneWithoutDocumentsInputSchema } from './usersCreateNestedOneWithoutDocumentsInputSchema';
import { vehiclesCreateNestedOneWithoutDocumentsInputSchema } from './vehiclesCreateNestedOneWithoutDocumentsInputSchema';
import { menu_itemsCreateNestedOneWithoutDocumentsInputSchema } from './menu_itemsCreateNestedOneWithoutDocumentsInputSchema';
import { lost_itemsCreateNestedOneWithoutDocumentsInputSchema } from './lost_itemsCreateNestedOneWithoutDocumentsInputSchema';
import { transactionsCreateNestedOneWithoutDocumentsInputSchema } from './transactionsCreateNestedOneWithoutDocumentsInputSchema';

export const documentsCreateWithoutDriversInputSchema: z.ZodType<Prisma.documentsCreateWithoutDriversInput> = z.object({
  document_id: z.string().uuid().optional(),
  document_type: z.lazy(() => DOCUMENT_TYPESchema),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  expiration_date: z.coerce.date().optional().nullable(),
  issue_date: z.coerce.date().optional().nullable(),
  additional_info: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  public: z.boolean().optional(),
  files: z.lazy(() => filesCreateNestedManyWithoutDocumentsInputSchema).optional(),
  delivery_driver: z.lazy(() => delivery_driversCreateNestedOneWithoutDocumentsInputSchema).optional(),
  business: z.lazy(() => businessCreateNestedOneWithoutDocumentsInputSchema).optional(),
  user: z.lazy(() => usersCreateNestedOneWithoutDocumentsInputSchema).optional(),
  vehicles: z.lazy(() => vehiclesCreateNestedOneWithoutDocumentsInputSchema).optional(),
  menu_items: z.lazy(() => menu_itemsCreateNestedOneWithoutDocumentsInputSchema).optional(),
  lost_items: z.lazy(() => lost_itemsCreateNestedOneWithoutDocumentsInputSchema).optional(),
  transactions: z.lazy(() => transactionsCreateNestedOneWithoutDocumentsInputSchema).optional()
}).strict();

export default documentsCreateWithoutDriversInputSchema;
