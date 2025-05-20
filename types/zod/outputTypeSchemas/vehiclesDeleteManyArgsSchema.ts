import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { vehiclesWhereInputSchema } from '../inputTypeSchemas/vehiclesWhereInputSchema'

export const vehiclesDeleteManyArgsSchema: z.ZodType<Prisma.vehiclesDeleteManyArgs> = z.object({
  where: vehiclesWhereInputSchema.optional(),
}).strict() ;

export default vehiclesDeleteManyArgsSchema;
