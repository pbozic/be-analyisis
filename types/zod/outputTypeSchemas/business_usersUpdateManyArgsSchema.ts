import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { business_usersUpdateManyMutationInputSchema } from '../inputTypeSchemas/business_usersUpdateManyMutationInputSchema'
import { business_usersUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/business_usersUncheckedUpdateManyInputSchema'
import { business_usersWhereInputSchema } from '../inputTypeSchemas/business_usersWhereInputSchema'

export const business_usersUpdateManyArgsSchema: z.ZodType<Prisma.business_usersUpdateManyArgs> = z.object({
  data: z.union([ business_usersUpdateManyMutationInputSchema,business_usersUncheckedUpdateManyInputSchema ]),
  where: business_usersWhereInputSchema.optional(),
}).strict() ;

export default business_usersUpdateManyArgsSchema;
