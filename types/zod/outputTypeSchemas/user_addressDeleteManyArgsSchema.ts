import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { user_addressWhereInputSchema } from '../inputTypeSchemas/user_addressWhereInputSchema'

export const user_addressDeleteManyArgsSchema: z.ZodType<Prisma.user_addressDeleteManyArgs> = z.object({
  where: user_addressWhereInputSchema.optional(),
}).strict() ;

export default user_addressDeleteManyArgsSchema;
