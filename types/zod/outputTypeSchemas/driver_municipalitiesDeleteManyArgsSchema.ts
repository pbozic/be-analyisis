import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { driver_municipalitiesWhereInputSchema } from '../inputTypeSchemas/driver_municipalitiesWhereInputSchema';

export const driver_municipalitiesDeleteManyArgsSchema: z.ZodType<Prisma.driver_municipalitiesDeleteManyArgs> = z
	.object({
		where: driver_municipalitiesWhereInputSchema.optional(),
	})
	.strict();

export default driver_municipalitiesDeleteManyArgsSchema;
