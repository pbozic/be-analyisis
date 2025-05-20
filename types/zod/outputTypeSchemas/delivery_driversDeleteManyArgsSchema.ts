import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { delivery_driversWhereInputSchema } from '../inputTypeSchemas/delivery_driversWhereInputSchema'

export const delivery_driversDeleteManyArgsSchema: z.ZodType<Prisma.delivery_driversDeleteManyArgs> = z.object({
  where: delivery_driversWhereInputSchema.optional(),
}).strict() ;

export default delivery_driversDeleteManyArgsSchema;
