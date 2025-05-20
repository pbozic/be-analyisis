import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { businessCreateManyInputSchema } from '../inputTypeSchemas/businessCreateManyInputSchema'

export const businessCreateManyAndReturnArgsSchema: z.ZodType<Prisma.businessCreateManyAndReturnArgs> = z.object({
  data: z.union([ businessCreateManyInputSchema,businessCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default businessCreateManyAndReturnArgsSchema;
