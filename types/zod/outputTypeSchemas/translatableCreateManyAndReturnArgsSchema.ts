import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { translatableCreateManyInputSchema } from '../inputTypeSchemas/translatableCreateManyInputSchema'

export const translatableCreateManyAndReturnArgsSchema: z.ZodType<Prisma.translatableCreateManyAndReturnArgs> = z.object({
  data: z.union([ translatableCreateManyInputSchema,translatableCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default translatableCreateManyAndReturnArgsSchema;
