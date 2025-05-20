import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { promo_bannersUpdateManyMutationInputSchema } from '../inputTypeSchemas/promo_bannersUpdateManyMutationInputSchema'
import { promo_bannersUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/promo_bannersUncheckedUpdateManyInputSchema'
import { promo_bannersWhereInputSchema } from '../inputTypeSchemas/promo_bannersWhereInputSchema'

export const promo_bannersUpdateManyArgsSchema: z.ZodType<Prisma.promo_bannersUpdateManyArgs> = z.object({
  data: z.union([ promo_bannersUpdateManyMutationInputSchema,promo_bannersUncheckedUpdateManyInputSchema ]),
  where: promo_bannersWhereInputSchema.optional(),
}).strict() ;

export default promo_bannersUpdateManyArgsSchema;
