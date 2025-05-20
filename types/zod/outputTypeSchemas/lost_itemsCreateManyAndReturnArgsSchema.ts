import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { lost_itemsCreateManyInputSchema } from '../inputTypeSchemas/lost_itemsCreateManyInputSchema'

export const lost_itemsCreateManyAndReturnArgsSchema: z.ZodType<Prisma.lost_itemsCreateManyAndReturnArgs> = z.object({
  data: z.union([ lost_itemsCreateManyInputSchema,lost_itemsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default lost_itemsCreateManyAndReturnArgsSchema;
