import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { filesWhereInputSchema } from './filesWhereInputSchema';

export const FilesNullableRelationFilterSchema: z.ZodType<Prisma.FilesNullableRelationFilter> = z.object({
  is: z.lazy(() => filesWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => filesWhereInputSchema).optional().nullable()
}).strict();

export default FilesNullableRelationFilterSchema;
