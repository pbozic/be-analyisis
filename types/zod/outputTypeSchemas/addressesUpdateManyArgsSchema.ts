import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { addressesUpdateManyMutationInputSchema } from '../inputTypeSchemas/addressesUpdateManyMutationInputSchema'
import { addressesUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/addressesUncheckedUpdateManyInputSchema'
import { addressesWhereInputSchema } from '../inputTypeSchemas/addressesWhereInputSchema'

export const addressesUpdateManyArgsSchema: z.ZodType<Prisma.addressesUpdateManyArgs> = z.object({
  data: z.union([ addressesUpdateManyMutationInputSchema,addressesUncheckedUpdateManyInputSchema ]),
  where: addressesWhereInputSchema.optional(),
}).strict() ;

export default addressesUpdateManyArgsSchema;
