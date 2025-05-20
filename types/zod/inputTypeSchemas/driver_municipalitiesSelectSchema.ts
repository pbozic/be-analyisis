import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { driversArgsSchema } from '../outputTypeSchemas/driversArgsSchema';
import { municipalitiesArgsSchema } from '../outputTypeSchemas/municipalitiesArgsSchema';

export const driver_municipalitiesSelectSchema: z.ZodType<Prisma.driver_municipalitiesSelect> = z
	.object({
		driver_municipalities_id: z.boolean().optional(),
		driver_id: z.boolean().optional(),
		municipalities_id: z.boolean().optional(),
		created_at: z.boolean().optional(),
		updated_at: z.boolean().optional(),
		drivers: z.union([z.boolean(), z.lazy(() => driversArgsSchema)]).optional(),
		municipalities: z.union([z.boolean(), z.lazy(() => municipalitiesArgsSchema)]).optional(),
	})
	.strict();

export default driver_municipalitiesSelectSchema;
