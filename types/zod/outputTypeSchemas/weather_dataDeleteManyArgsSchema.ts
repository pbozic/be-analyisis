import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { weather_dataWhereInputSchema } from '../inputTypeSchemas/weather_dataWhereInputSchema';

export const weather_dataDeleteManyArgsSchema: z.ZodType<Prisma.weather_dataDeleteManyArgs> = z
	.object({
		where: weather_dataWhereInputSchema.optional(),
	})
	.strict();

export default weather_dataDeleteManyArgsSchema;
