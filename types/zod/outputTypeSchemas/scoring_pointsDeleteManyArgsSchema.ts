import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { scoring_pointsWhereInputSchema } from '../inputTypeSchemas/scoring_pointsWhereInputSchema'

export const scoring_pointsDeleteManyArgsSchema: z.ZodType<Prisma.scoring_pointsDeleteManyArgs> = z.object({
  where: scoring_pointsWhereInputSchema.optional(),
}).strict() ;

export default scoring_pointsDeleteManyArgsSchema;
