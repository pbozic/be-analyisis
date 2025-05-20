import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const municipalitiesCountOutputTypeSelectSchema: z.ZodType<Prisma.municipalitiesCountOutputTypeSelect> = z
	.object({
		driver_municipalities: z.boolean().optional(),
		settlements: z.boolean().optional(),
		weather_data: z.boolean().optional(),
	})
	.strict();

export default municipalitiesCountOutputTypeSelectSchema;
