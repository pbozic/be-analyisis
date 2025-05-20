import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { reservationsCreateManyInputSchema } from '../inputTypeSchemas/reservationsCreateManyInputSchema';

export const reservationsCreateManyAndReturnArgsSchema: z.ZodType<Prisma.reservationsCreateManyAndReturnArgs> = z
	.object({
		data: z.union([reservationsCreateManyInputSchema, reservationsCreateManyInputSchema.array()]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();

export default reservationsCreateManyAndReturnArgsSchema;
