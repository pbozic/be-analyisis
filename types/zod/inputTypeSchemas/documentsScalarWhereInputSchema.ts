import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { EnumDOCUMENT_TYPEFilterSchema } from './EnumDOCUMENT_TYPEFilterSchema';
import { DOCUMENT_TYPESchema } from './DOCUMENT_TYPESchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';

export const documentsScalarWhereInputSchema: z.ZodType<Prisma.documentsScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => documentsScalarWhereInputSchema),z.lazy(() => documentsScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => documentsScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => documentsScalarWhereInputSchema),z.lazy(() => documentsScalarWhereInputSchema).array() ]).optional(),
  document_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  document_type: z.union([ z.lazy(() => EnumDOCUMENT_TYPEFilterSchema),z.lazy(() => DOCUMENT_TYPESchema) ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  expiration_date: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  issue_date: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  additional_info: z.lazy(() => JsonNullableFilterSchema).optional(),
  public: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  driver_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  delivery_driver_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  business_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  user_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  vehicle_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  menu_item_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  lost_item_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  transaction_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default documentsScalarWhereInputSchema;
