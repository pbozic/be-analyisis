import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { filesUpdateManyMutationInputSchema } from '../inputTypeSchemas/filesUpdateManyMutationInputSchema'
import { filesUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/filesUncheckedUpdateManyInputSchema'
import { filesWhereInputSchema } from '../inputTypeSchemas/filesWhereInputSchema'

export const filesUpdateManyArgsSchema: z.ZodType<Prisma.filesUpdateManyArgs> = z.object({
  data: z.union([ filesUpdateManyMutationInputSchema,filesUncheckedUpdateManyInputSchema ]),
  where: filesWhereInputSchema.optional(),
}).strict() ;

export default filesUpdateManyArgsSchema;
