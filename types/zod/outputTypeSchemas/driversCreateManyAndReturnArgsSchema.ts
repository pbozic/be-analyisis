import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { driversCreateManyInputSchema } from '../inputTypeSchemas/driversCreateManyInputSchema';

export const driversCreateManyAndReturnArgsSchema: z.ZodType<Prisma.driversCreateManyAndReturnArgs> = z
	.object({
		data: z.union([driversCreateManyInputSchema, driversCreateManyInputSchema.array()]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();

export default driversCreateManyAndReturnArgsSchema;
