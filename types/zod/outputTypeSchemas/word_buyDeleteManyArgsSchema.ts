import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { word_buyWhereInputSchema } from '../inputTypeSchemas/word_buyWhereInputSchema'

export const word_buyDeleteManyArgsSchema: z.ZodType<Prisma.word_buyDeleteManyArgs> = z.object({
  where: word_buyWhereInputSchema.optional(),
}).strict() ;

export default word_buyDeleteManyArgsSchema;
