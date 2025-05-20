import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { flag_historyUpdateManyMutationInputSchema } from '../inputTypeSchemas/flag_historyUpdateManyMutationInputSchema'
import { flag_historyUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/flag_historyUncheckedUpdateManyInputSchema'
import { flag_historyWhereInputSchema } from '../inputTypeSchemas/flag_historyWhereInputSchema'

export const flag_historyUpdateManyArgsSchema: z.ZodType<Prisma.flag_historyUpdateManyArgs> = z.object({
  data: z.union([ flag_historyUpdateManyMutationInputSchema,flag_historyUncheckedUpdateManyInputSchema ]),
  where: flag_historyWhereInputSchema.optional(),
}).strict() ;

export default flag_historyUpdateManyArgsSchema;
