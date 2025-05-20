import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { fiscal_devicesWhereInputSchema } from '../inputTypeSchemas/fiscal_devicesWhereInputSchema'

export const fiscal_devicesDeleteManyArgsSchema: z.ZodType<Prisma.fiscal_devicesDeleteManyArgs> = z.object({
  where: fiscal_devicesWhereInputSchema.optional(),
}).strict() ;

export default fiscal_devicesDeleteManyArgsSchema;
