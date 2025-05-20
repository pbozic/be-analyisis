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
import { DocumentsNullableRelationFilterSchema } from './DocumentsNullableRelationFilterSchema';
import { documentsWhereInputSchema } from './documentsWhereInputSchema';
import { CategoriesListRelationFilterSchema } from './CategoriesListRelationFilterSchema';
import { Promo_bannersListRelationFilterSchema } from './Promo_bannersListRelationFilterSchema';

export const filesWhereInputSchema: z.ZodType<Prisma.filesWhereInput> = z.object({
  AND: z.union([ z.lazy(() => filesWhereInputSchema),z.lazy(() => filesWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => filesWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => filesWhereInputSchema),z.lazy(() => filesWhereInputSchema).array() ]).optional(),
  file_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  url: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  file_type: z.union([ z.lazy(() => EnumFILE_TYPEFilterSchema),z.lazy(() => FILE_TYPESchema) ]).optional(),
  public: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  mime_type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  document_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  documents: z.union([ z.lazy(() => DocumentsNullableRelationFilterSchema),z.lazy(() => documentsWhereInputSchema) ]).optional().nullable(),
  categories: z.lazy(() => CategoriesListRelationFilterSchema).optional(),
  promo_banners: z.lazy(() => Promo_bannersListRelationFilterSchema).optional()
}).strict();

export default filesWhereInputSchema;
