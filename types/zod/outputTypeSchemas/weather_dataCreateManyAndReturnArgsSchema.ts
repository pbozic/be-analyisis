import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { weather_dataCreateManyInputSchema } from '../inputTypeSchemas/weather_dataCreateManyInputSchema';

export const weather_dataCreateManyAndReturnArgsSchema: z.ZodType<Prisma.weather_dataCreateManyAndReturnArgs> = z
	.object({
		data: z.union([weather_dataCreateManyInputSchema, weather_dataCreateManyInputSchema.array()]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();

export default weather_dataCreateManyAndReturnArgsSchema;
