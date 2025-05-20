import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { promo_sectionsWhereInputSchema } from '../inputTypeSchemas/promo_sectionsWhereInputSchema'

export const promo_sectionsDeleteManyArgsSchema: z.ZodType<Prisma.promo_sectionsDeleteManyArgs> = z.object({
  where: promo_sectionsWhereInputSchema.optional(),
}).strict() ;

export default promo_sectionsDeleteManyArgsSchema;
