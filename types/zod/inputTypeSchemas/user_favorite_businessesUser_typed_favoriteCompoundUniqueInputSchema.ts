import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BUSINESS_TYPESchema } from './BUSINESS_TYPESchema';

export const user_favorite_businessesUser_typed_favoriteCompoundUniqueInputSchema: z.ZodType<Prisma.user_favorite_businessesUser_typed_favoriteCompoundUniqueInput> = z.object({
  user_id: z.string(),
  business_id: z.string(),
  business_type: z.lazy(() => BUSINESS_TYPESchema)
}).strict();

export default user_favorite_businessesUser_typed_favoriteCompoundUniqueInputSchema;
