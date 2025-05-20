import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { business_clientsCreateManyInputSchema } from '../inputTypeSchemas/business_clientsCreateManyInputSchema'

export const business_clientsCreateManyArgsSchema: z.ZodType<Prisma.business_clientsCreateManyArgs> = z.object({
  data: z.union([ business_clientsCreateManyInputSchema,business_clientsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default business_clientsCreateManyArgsSchema;
