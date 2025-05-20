import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { reservationsUpdateManyMutationInputSchema } from '../inputTypeSchemas/reservationsUpdateManyMutationInputSchema'
import { reservationsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/reservationsUncheckedUpdateManyInputSchema'
import { reservationsWhereInputSchema } from '../inputTypeSchemas/reservationsWhereInputSchema'

export const reservationsUpdateManyArgsSchema: z.ZodType<Prisma.reservationsUpdateManyArgs> = z.object({
  data: z.union([ reservationsUpdateManyMutationInputSchema,reservationsUncheckedUpdateManyInputSchema ]),
  where: reservationsWhereInputSchema.optional(),
}).strict() ;

export default reservationsUpdateManyArgsSchema;
