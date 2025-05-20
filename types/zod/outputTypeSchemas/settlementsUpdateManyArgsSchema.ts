import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { settlementsUpdateManyMutationInputSchema } from '../inputTypeSchemas/settlementsUpdateManyMutationInputSchema'
import { settlementsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/settlementsUncheckedUpdateManyInputSchema'
import { settlementsWhereInputSchema } from '../inputTypeSchemas/settlementsWhereInputSchema'

export const settlementsUpdateManyArgsSchema: z.ZodType<Prisma.settlementsUpdateManyArgs> = z.object({
  data: z.union([ settlementsUpdateManyMutationInputSchema,settlementsUncheckedUpdateManyInputSchema ]),
  where: settlementsWhereInputSchema.optional(),
}).strict() ;

export default settlementsUpdateManyArgsSchema;
