import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { promo_adsUpdateManyMutationInputSchema } from '../inputTypeSchemas/promo_adsUpdateManyMutationInputSchema'
import { promo_adsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/promo_adsUncheckedUpdateManyInputSchema'
import { promo_adsWhereInputSchema } from '../inputTypeSchemas/promo_adsWhereInputSchema'

export const promo_adsUpdateManyArgsSchema: z.ZodType<Prisma.promo_adsUpdateManyArgs> = z.object({
  data: z.union([ promo_adsUpdateManyMutationInputSchema,promo_adsUncheckedUpdateManyInputSchema ]),
  where: promo_adsWhereInputSchema.optional(),
}).strict() ;

export default promo_adsUpdateManyArgsSchema;
