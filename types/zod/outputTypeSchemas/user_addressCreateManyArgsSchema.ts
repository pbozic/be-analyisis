import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { user_addressCreateManyInputSchema } from '../inputTypeSchemas/user_addressCreateManyInputSchema'

export const user_addressCreateManyArgsSchema: z.ZodType<Prisma.user_addressCreateManyArgs> = z.object({
  data: z.union([ user_addressCreateManyInputSchema,user_addressCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default user_addressCreateManyArgsSchema;
