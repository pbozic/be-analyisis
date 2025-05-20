import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { menusUpdateManyMutationInputSchema } from '../inputTypeSchemas/menusUpdateManyMutationInputSchema'
import { menusUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/menusUncheckedUpdateManyInputSchema'
import { menusWhereInputSchema } from '../inputTypeSchemas/menusWhereInputSchema'

export const menusUpdateManyArgsSchema: z.ZodType<Prisma.menusUpdateManyArgs> = z.object({
  data: z.union([ menusUpdateManyMutationInputSchema,menusUncheckedUpdateManyInputSchema ]),
  where: menusWhereInputSchema.optional(),
}).strict() ;

export default menusUpdateManyArgsSchema;
