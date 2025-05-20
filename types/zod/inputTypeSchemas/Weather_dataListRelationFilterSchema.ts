import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { weather_dataWhereInputSchema } from './weather_dataWhereInputSchema';

export const Weather_dataListRelationFilterSchema: z.ZodType<Prisma.Weather_dataListRelationFilter> = z
	.object({
		every: z.lazy(() => weather_dataWhereInputSchema).optional(),
		some: z.lazy(() => weather_dataWhereInputSchema).optional(),
		none: z.lazy(() => weather_dataWhereInputSchema).optional(),
	})
	.strict();

export default Weather_dataListRelationFilterSchema;
