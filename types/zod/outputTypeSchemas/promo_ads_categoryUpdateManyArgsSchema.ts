import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { promo_ads_categoryUpdateManyMutationInputSchema } from '../inputTypeSchemas/promo_ads_categoryUpdateManyMutationInputSchema'
import { promo_ads_categoryUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/promo_ads_categoryUncheckedUpdateManyInputSchema'
import { promo_ads_categoryWhereInputSchema } from '../inputTypeSchemas/promo_ads_categoryWhereInputSchema'

export const promo_ads_categoryUpdateManyArgsSchema: z.ZodType<Prisma.promo_ads_categoryUpdateManyArgs> = z.object({
  data: z.union([ promo_ads_categoryUpdateManyMutationInputSchema,promo_ads_categoryUncheckedUpdateManyInputSchema ]),
  where: promo_ads_categoryWhereInputSchema.optional(),
}).strict() ;

export default promo_ads_categoryUpdateManyArgsSchema;
