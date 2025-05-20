import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { referralsWhereInputSchema } from '../inputTypeSchemas/referralsWhereInputSchema'

export const referralsDeleteManyArgsSchema: z.ZodType<Prisma.referralsDeleteManyArgs> = z.object({
  where: referralsWhereInputSchema.optional(),
}).strict() ;

export default referralsDeleteManyArgsSchema;
