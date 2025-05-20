import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { user_favorite_businessesUpdateManyMutationInputSchema } from '../inputTypeSchemas/user_favorite_businessesUpdateManyMutationInputSchema'
import { user_favorite_businessesUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/user_favorite_businessesUncheckedUpdateManyInputSchema'
import { user_favorite_businessesWhereInputSchema } from '../inputTypeSchemas/user_favorite_businessesWhereInputSchema'

export const user_favorite_businessesUpdateManyArgsSchema: z.ZodType<Prisma.user_favorite_businessesUpdateManyArgs> = z.object({
  data: z.union([ user_favorite_businessesUpdateManyMutationInputSchema,user_favorite_businessesUncheckedUpdateManyInputSchema ]),
  where: user_favorite_businessesWhereInputSchema.optional(),
}).strict() ;

export default user_favorite_businessesUpdateManyArgsSchema;
