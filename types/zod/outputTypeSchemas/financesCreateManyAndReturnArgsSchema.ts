import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { financesCreateManyInputSchema } from '../inputTypeSchemas/financesCreateManyInputSchema'

export const financesCreateManyAndReturnArgsSchema: z.ZodType<Prisma.financesCreateManyAndReturnArgs> = z.object({
  data: z.union([ financesCreateManyInputSchema,financesCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default financesCreateManyAndReturnArgsSchema;
