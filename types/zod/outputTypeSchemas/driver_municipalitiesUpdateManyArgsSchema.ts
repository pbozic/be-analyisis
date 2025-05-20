import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { driver_municipalitiesUpdateManyMutationInputSchema } from '../inputTypeSchemas/driver_municipalitiesUpdateManyMutationInputSchema';
import { driver_municipalitiesUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/driver_municipalitiesUncheckedUpdateManyInputSchema';
import { driver_municipalitiesWhereInputSchema } from '../inputTypeSchemas/driver_municipalitiesWhereInputSchema';

export const driver_municipalitiesUpdateManyArgsSchema: z.ZodType<Prisma.driver_municipalitiesUpdateManyArgs> = z
	.object({
		data: z.union([
			driver_municipalitiesUpdateManyMutationInputSchema,
			driver_municipalitiesUncheckedUpdateManyInputSchema,
		]),
		where: driver_municipalitiesWhereInputSchema.optional(),
	})
	.strict();

export default driver_municipalitiesUpdateManyArgsSchema;
