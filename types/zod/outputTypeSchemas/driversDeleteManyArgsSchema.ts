import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { driversWhereInputSchema } from '../inputTypeSchemas/driversWhereInputSchema';

export const driversDeleteManyArgsSchema: z.ZodType<Prisma.driversDeleteManyArgs> = z
	.object({
		where: driversWhereInputSchema.optional(),
	})
	.strict();

export default driversDeleteManyArgsSchema;
