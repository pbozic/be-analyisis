import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { addressesCreateManyInputSchema } from '../inputTypeSchemas/addressesCreateManyInputSchema'

export const addressesCreateManyArgsSchema: z.ZodType<Prisma.addressesCreateManyArgs> = z.object({
  data: z.union([ addressesCreateManyInputSchema,addressesCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default addressesCreateManyArgsSchema;
