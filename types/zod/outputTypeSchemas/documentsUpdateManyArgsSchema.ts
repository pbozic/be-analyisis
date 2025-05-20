import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { documentsUpdateManyMutationInputSchema } from '../inputTypeSchemas/documentsUpdateManyMutationInputSchema'
import { documentsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/documentsUncheckedUpdateManyInputSchema'
import { documentsWhereInputSchema } from '../inputTypeSchemas/documentsWhereInputSchema'

export const documentsUpdateManyArgsSchema: z.ZodType<Prisma.documentsUpdateManyArgs> = z.object({
  data: z.union([ documentsUpdateManyMutationInputSchema,documentsUncheckedUpdateManyInputSchema ]),
  where: documentsWhereInputSchema.optional(),
}).strict() ;

export default documentsUpdateManyArgsSchema;
