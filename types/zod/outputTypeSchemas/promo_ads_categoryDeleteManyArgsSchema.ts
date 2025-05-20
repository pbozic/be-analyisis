import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { promo_ads_categoryWhereInputSchema } from '../inputTypeSchemas/promo_ads_categoryWhereInputSchema'

export const promo_ads_categoryDeleteManyArgsSchema: z.ZodType<Prisma.promo_ads_categoryDeleteManyArgs> = z.object({
  where: promo_ads_categoryWhereInputSchema.optional(),
}).strict() ;

export default promo_ads_categoryDeleteManyArgsSchema;
