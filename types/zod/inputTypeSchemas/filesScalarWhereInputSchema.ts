import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { EnumFILE_TYPEFilterSchema } from './EnumFILE_TYPEFilterSchema';
import { FILE_TYPESchema } from './FILE_TYPESchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';

export const filesScalarWhereInputSchema: z.ZodType<Prisma.filesScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => filesScalarWhereInputSchema),z.lazy(() => filesScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => filesScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => filesScalarWhereInputSchema),z.lazy(() => filesScalarWhereInputSchema).array() ]).optional(),
  file_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  url: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  file_type: z.union([ z.lazy(() => EnumFILE_TYPEFilterSchema),z.lazy(() => FILE_TYPESchema) ]).optional(),
  public: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  mime_type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  document_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default filesScalarWhereInputSchema;
