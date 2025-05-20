import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { fiscal_devicesUpdateManyMutationInputSchema } from '../inputTypeSchemas/fiscal_devicesUpdateManyMutationInputSchema'
import { fiscal_devicesUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/fiscal_devicesUncheckedUpdateManyInputSchema'
import { fiscal_devicesWhereInputSchema } from '../inputTypeSchemas/fiscal_devicesWhereInputSchema'

export const fiscal_devicesUpdateManyArgsSchema: z.ZodType<Prisma.fiscal_devicesUpdateManyArgs> = z.object({
  data: z.union([ fiscal_devicesUpdateManyMutationInputSchema,fiscal_devicesUncheckedUpdateManyInputSchema ]),
  where: fiscal_devicesWhereInputSchema.optional(),
}).strict() ;

export default fiscal_devicesUpdateManyArgsSchema;
