import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { COMPANY_ROLESchema } from './COMPANY_ROLESchema';

export const business_usersCreateManyOperating_addressInputSchema: z.ZodType<Prisma.business_usersCreateManyOperating_addressInput> = z.object({
  business_users_id: z.string().uuid().optional(),
  online: z.boolean().optional().nullable(),
  company_role: z.lazy(() => COMPANY_ROLESchema).optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  user_id: z.string(),
  business_id: z.string()
}).strict();

export default business_usersCreateManyOperating_addressInputSchema;
