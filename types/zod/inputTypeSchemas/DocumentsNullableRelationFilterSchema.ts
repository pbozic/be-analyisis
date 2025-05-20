import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { documentsWhereInputSchema } from './documentsWhereInputSchema';

export const DocumentsNullableRelationFilterSchema: z.ZodType<Prisma.DocumentsNullableRelationFilter> = z.object({
  is: z.lazy(() => documentsWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => documentsWhereInputSchema).optional().nullable()
}).strict();

export default DocumentsNullableRelationFilterSchema;
