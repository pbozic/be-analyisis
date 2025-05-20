import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { translationsWhereInputSchema } from '../inputTypeSchemas/translationsWhereInputSchema'

export const translationsDeleteManyArgsSchema: z.ZodType<Prisma.translationsDeleteManyArgs> = z.object({
  where: translationsWhereInputSchema.optional(),
}).strict() ;

export default translationsDeleteManyArgsSchema;
