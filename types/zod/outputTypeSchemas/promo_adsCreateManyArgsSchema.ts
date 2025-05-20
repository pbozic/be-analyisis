import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { promo_adsCreateManyInputSchema } from '../inputTypeSchemas/promo_adsCreateManyInputSchema'

export const promo_adsCreateManyArgsSchema: z.ZodType<Prisma.promo_adsCreateManyArgs> = z.object({
  data: z.union([ promo_adsCreateManyInputSchema,promo_adsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default promo_adsCreateManyArgsSchema;
