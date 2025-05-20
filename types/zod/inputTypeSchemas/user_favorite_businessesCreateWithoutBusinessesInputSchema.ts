import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BUSINESS_TYPESchema } from './BUSINESS_TYPESchema';
import { usersCreateNestedOneWithoutUser_favorite_businessesInputSchema } from './usersCreateNestedOneWithoutUser_favorite_businessesInputSchema';

export const user_favorite_businessesCreateWithoutBusinessesInputSchema: z.ZodType<Prisma.user_favorite_businessesCreateWithoutBusinessesInput> = z.object({
  user_favorite_businesses_id: z.string().uuid().optional(),
  business_type: z.lazy(() => BUSINESS_TYPESchema),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  users: z.lazy(() => usersCreateNestedOneWithoutUser_favorite_businessesInputSchema)
}).strict();

export default user_favorite_businessesCreateWithoutBusinessesInputSchema;
