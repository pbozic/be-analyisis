import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { municipalitiesArgsSchema } from '../outputTypeSchemas/municipalitiesArgsSchema';
import { settlementsArgsSchema } from '../outputTypeSchemas/settlementsArgsSchema';

export const weather_dataIncludeSchema: z.ZodType<Prisma.weather_dataInclude> = z
	.object({
		municipality: z.union([z.boolean(), z.lazy(() => municipalitiesArgsSchema)]).optional(),
		settlement: z.union([z.boolean(), z.lazy(() => settlementsArgsSchema)]).optional(),
	})
	.strict();

export default weather_dataIncludeSchema;
