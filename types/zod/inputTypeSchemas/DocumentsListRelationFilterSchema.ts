import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { documentsWhereInputSchema } from './documentsWhereInputSchema';

export const DocumentsListRelationFilterSchema: z.ZodType<Prisma.DocumentsListRelationFilter> = z.object({
  every: z.lazy(() => documentsWhereInputSchema).optional(),
  some: z.lazy(() => documentsWhereInputSchema).optional(),
  none: z.lazy(() => documentsWhereInputSchema).optional()
}).strict();

export default DocumentsListRelationFilterSchema;
