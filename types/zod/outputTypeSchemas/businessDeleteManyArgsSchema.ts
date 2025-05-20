import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { businessWhereInputSchema } from '../inputTypeSchemas/businessWhereInputSchema'

export const businessDeleteManyArgsSchema: z.ZodType<Prisma.businessDeleteManyArgs> = z.object({
  where: businessWhereInputSchema.optional(),
}).strict() ;

export default businessDeleteManyArgsSchema;
