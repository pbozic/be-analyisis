import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { word_bundlesUpdateManyMutationInputSchema } from '../inputTypeSchemas/word_bundlesUpdateManyMutationInputSchema'
import { word_bundlesUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/word_bundlesUncheckedUpdateManyInputSchema'
import { word_bundlesWhereInputSchema } from '../inputTypeSchemas/word_bundlesWhereInputSchema'

export const word_bundlesUpdateManyArgsSchema: z.ZodType<Prisma.word_bundlesUpdateManyArgs> = z.object({
  data: z.union([ word_bundlesUpdateManyMutationInputSchema,word_bundlesUncheckedUpdateManyInputSchema ]),
  where: word_bundlesWhereInputSchema.optional(),
}).strict() ;

export default word_bundlesUpdateManyArgsSchema;
