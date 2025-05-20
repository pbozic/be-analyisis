import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { COMPANY_ROLESchema } from './COMPANY_ROLESchema';

export const business_usersCreateManyUsersInputSchema: z.ZodType<Prisma.business_usersCreateManyUsersInput> = z.object({
  business_users_id: z.string().uuid().optional(),
  online: z.boolean().optional().nullable(),
  company_role: z.lazy(() => COMPANY_ROLESchema).optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  business_id: z.string(),
  operating_address_id: z.string().optional().nullable()
}).strict();

export default business_usersCreateManyUsersInputSchema;
