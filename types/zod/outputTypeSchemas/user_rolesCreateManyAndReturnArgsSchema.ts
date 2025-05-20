import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { user_rolesCreateManyInputSchema } from '../inputTypeSchemas/user_rolesCreateManyInputSchema'

export const user_rolesCreateManyAndReturnArgsSchema: z.ZodType<Prisma.user_rolesCreateManyAndReturnArgs> = z.object({
  data: z.union([ user_rolesCreateManyInputSchema,user_rolesCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default user_rolesCreateManyAndReturnArgsSchema;
