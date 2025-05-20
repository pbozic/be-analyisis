import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { businessArgsSchema } from '../outputTypeSchemas/businessArgsSchema';
import { usersArgsSchema } from '../outputTypeSchemas/usersArgsSchema';

export const reservationsIncludeSchema: z.ZodType<Prisma.reservationsInclude> = z
	.object({
		business: z.union([z.boolean(), z.lazy(() => businessArgsSchema)]).optional(),
		user: z.union([z.boolean(), z.lazy(() => usersArgsSchema)]).optional(),
	})
	.strict();

export default reservationsIncludeSchema;
