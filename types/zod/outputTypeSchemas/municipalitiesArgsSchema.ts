import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { municipalitiesSelectSchema } from '../inputTypeSchemas/municipalitiesSelectSchema';
import { municipalitiesIncludeSchema } from '../inputTypeSchemas/municipalitiesIncludeSchema';

export const municipalitiesArgsSchema: z.ZodType<Prisma.municipalitiesDefaultArgs> = z.object({
  select: z.lazy(() => municipalitiesSelectSchema).optional(),
  include: z.lazy(() => municipalitiesIncludeSchema).optional(),
}).strict();

export default municipalitiesArgsSchema;
