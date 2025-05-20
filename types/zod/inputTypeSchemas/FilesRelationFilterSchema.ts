import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { filesWhereInputSchema } from './filesWhereInputSchema';

export const FilesRelationFilterSchema: z.ZodType<Prisma.FilesRelationFilter> = z.object({
  is: z.lazy(() => filesWhereInputSchema).optional(),
  isNot: z.lazy(() => filesWhereInputSchema).optional()
}).strict();

export default FilesRelationFilterSchema;
