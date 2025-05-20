import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { business_clientsWhereInputSchema } from '../inputTypeSchemas/business_clientsWhereInputSchema'

export const business_clientsDeleteManyArgsSchema: z.ZodType<Prisma.business_clientsDeleteManyArgs> = z.object({
  where: business_clientsWhereInputSchema.optional(),
}).strict() ;

export default business_clientsDeleteManyArgsSchema;
