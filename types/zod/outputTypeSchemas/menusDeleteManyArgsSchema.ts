import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { menusWhereInputSchema } from '../inputTypeSchemas/menusWhereInputSchema'

export const menusDeleteManyArgsSchema: z.ZodType<Prisma.menusDeleteManyArgs> = z.object({
  where: menusWhereInputSchema.optional(),
}).strict() ;

export default menusDeleteManyArgsSchema;
