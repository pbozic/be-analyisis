import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { menusCreateManyInputSchema } from '../inputTypeSchemas/menusCreateManyInputSchema'

export const menusCreateManyAndReturnArgsSchema: z.ZodType<Prisma.menusCreateManyAndReturnArgs> = z.object({
  data: z.union([ menusCreateManyInputSchema,menusCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default menusCreateManyAndReturnArgsSchema;
