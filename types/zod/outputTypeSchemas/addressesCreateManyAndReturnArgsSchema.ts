import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { addressesCreateManyInputSchema } from '../inputTypeSchemas/addressesCreateManyInputSchema'

export const addressesCreateManyAndReturnArgsSchema: z.ZodType<Prisma.addressesCreateManyAndReturnArgs> = z.object({
  data: z.union([ addressesCreateManyInputSchema,addressesCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default addressesCreateManyAndReturnArgsSchema;
