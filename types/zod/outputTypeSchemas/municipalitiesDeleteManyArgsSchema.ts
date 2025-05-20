import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { municipalitiesWhereInputSchema } from '../inputTypeSchemas/municipalitiesWhereInputSchema';

export const municipalitiesDeleteManyArgsSchema: z.ZodType<Prisma.municipalitiesDeleteManyArgs> = z
	.object({
		where: municipalitiesWhereInputSchema.optional(),
	})
	.strict();

export default municipalitiesDeleteManyArgsSchema;
