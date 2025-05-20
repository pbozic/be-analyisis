import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { reservationsWhereInputSchema } from '../inputTypeSchemas/reservationsWhereInputSchema'

export const reservationsDeleteManyArgsSchema: z.ZodType<Prisma.reservationsDeleteManyArgs> = z.object({
  where: reservationsWhereInputSchema.optional(),
}).strict() ;

export default reservationsDeleteManyArgsSchema;
