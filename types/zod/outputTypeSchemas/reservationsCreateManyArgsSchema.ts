import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { reservationsCreateManyInputSchema } from '../inputTypeSchemas/reservationsCreateManyInputSchema';

export const reservationsCreateManyArgsSchema: z.ZodType<Prisma.reservationsCreateManyArgs> = z
	.object({
		data: z.union([reservationsCreateManyInputSchema, reservationsCreateManyInputSchema.array()]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();

export default reservationsCreateManyArgsSchema;
