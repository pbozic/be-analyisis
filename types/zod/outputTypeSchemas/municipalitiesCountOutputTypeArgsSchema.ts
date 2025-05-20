import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { municipalitiesCountOutputTypeSelectSchema } from './municipalitiesCountOutputTypeSelectSchema';

export const municipalitiesCountOutputTypeArgsSchema: z.ZodType<Prisma.municipalitiesCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => municipalitiesCountOutputTypeSelectSchema).nullish(),
}).strict();

export default municipalitiesCountOutputTypeSelectSchema;
