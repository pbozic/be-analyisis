import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { word_buyUpdateManyMutationInputSchema } from '../inputTypeSchemas/word_buyUpdateManyMutationInputSchema'
import { word_buyUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/word_buyUncheckedUpdateManyInputSchema'
import { word_buyWhereInputSchema } from '../inputTypeSchemas/word_buyWhereInputSchema'

export const word_buyUpdateManyArgsSchema: z.ZodType<Prisma.word_buyUpdateManyArgs> = z.object({
  data: z.union([ word_buyUpdateManyMutationInputSchema,word_buyUncheckedUpdateManyInputSchema ]),
  where: word_buyWhereInputSchema.optional(),
}).strict() ;

export default word_buyUpdateManyArgsSchema;
