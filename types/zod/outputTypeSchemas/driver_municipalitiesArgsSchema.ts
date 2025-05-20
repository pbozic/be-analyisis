import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { driver_municipalitiesSelectSchema } from '../inputTypeSchemas/driver_municipalitiesSelectSchema';
import { driver_municipalitiesIncludeSchema } from '../inputTypeSchemas/driver_municipalitiesIncludeSchema';

export const driver_municipalitiesArgsSchema: z.ZodType<Prisma.driver_municipalitiesDefaultArgs> = z.object({
  select: z.lazy(() => driver_municipalitiesSelectSchema).optional(),
  include: z.lazy(() => driver_municipalitiesIncludeSchema).optional(),
}).strict();

export default driver_municipalitiesArgsSchema;
