import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { flag_historyFindManyArgsSchema } from '../outputTypeSchemas/flag_historyFindManyArgsSchema';
import { FlagsCountOutputTypeArgsSchema } from '../outputTypeSchemas/FlagsCountOutputTypeArgsSchema';

export const flagsIncludeSchema: z.ZodType<Prisma.flagsInclude> = z
	.object({
		history: z.union([z.boolean(), z.lazy(() => flag_historyFindManyArgsSchema)]).optional(),
		_count: z.union([z.boolean(), z.lazy(() => FlagsCountOutputTypeArgsSchema)]).optional(),
	})
	.strict();

export default flagsIncludeSchema;
