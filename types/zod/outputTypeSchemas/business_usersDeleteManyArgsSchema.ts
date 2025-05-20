import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { business_usersWhereInputSchema } from '../inputTypeSchemas/business_usersWhereInputSchema'

export const business_usersDeleteManyArgsSchema: z.ZodType<Prisma.business_usersDeleteManyArgs> = z.object({
  where: business_usersWhereInputSchema.optional(),
}).strict() ;

export default business_usersDeleteManyArgsSchema;
