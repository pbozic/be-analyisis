import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { local_productsCreateManyInputSchema } from '../inputTypeSchemas/local_productsCreateManyInputSchema'

export const local_productsCreateManyAndReturnArgsSchema: z.ZodType<Prisma.local_productsCreateManyAndReturnArgs> = z.object({
  data: z.union([ local_productsCreateManyInputSchema,local_productsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default local_productsCreateManyAndReturnArgsSchema;
