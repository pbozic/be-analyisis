import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { filesWhereInputSchema } from './filesWhereInputSchema';

export const FilesListRelationFilterSchema: z.ZodType<Prisma.FilesListRelationFilter> = z
	.object({
		every: z.lazy(() => filesWhereInputSchema).optional(),
		some: z.lazy(() => filesWhereInputSchema).optional(),
		none: z.lazy(() => filesWhereInputSchema).optional(),
	})
	.strict();

export default FilesListRelationFilterSchema;
