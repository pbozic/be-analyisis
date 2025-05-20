import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { promo_bannersWhereInputSchema } from '../inputTypeSchemas/promo_bannersWhereInputSchema'

export const promo_bannersDeleteManyArgsSchema: z.ZodType<Prisma.promo_bannersDeleteManyArgs> = z.object({
  where: promo_bannersWhereInputSchema.optional(),
}).strict() ;

export default promo_bannersDeleteManyArgsSchema;
