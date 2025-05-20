import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { flag_historySelectSchema } from '../inputTypeSchemas/flag_historySelectSchema';
import { flag_historyIncludeSchema } from '../inputTypeSchemas/flag_historyIncludeSchema';

export const flag_historyArgsSchema: z.ZodType<Prisma.flag_historyDefaultArgs> = z
	.object({
		select: z.lazy(() => flag_historySelectSchema).optional(),
		include: z.lazy(() => flag_historyIncludeSchema).optional(),
	})
	.strict();

export default flag_historyArgsSchema;
