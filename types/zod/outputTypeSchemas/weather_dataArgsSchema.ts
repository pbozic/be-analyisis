import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { weather_dataSelectSchema } from '../inputTypeSchemas/weather_dataSelectSchema';
import { weather_dataIncludeSchema } from '../inputTypeSchemas/weather_dataIncludeSchema';

export const weather_dataArgsSchema: z.ZodType<Prisma.weather_dataDefaultArgs> = z.object({
  select: z.lazy(() => weather_dataSelectSchema).optional(),
  include: z.lazy(() => weather_dataIncludeSchema).optional(),
}).strict();

export default weather_dataArgsSchema;
