import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { flag_historyWhereInputSchema } from '../inputTypeSchemas/flag_historyWhereInputSchema'

export const flag_historyDeleteManyArgsSchema: z.ZodType<Prisma.flag_historyDeleteManyArgs> = z.object({
  where: flag_historyWhereInputSchema.optional(),
}).strict() ;

export default flag_historyDeleteManyArgsSchema;
