import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const business_clientsCreateManyInputSchema: z.ZodType<Prisma.business_clientsCreateManyInput> = z.object({
  business_clients_id: z.string().uuid().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  business_id: z.string(),
  first_name: z.string().optional().nullable(),
  last_name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  telephone: z.string(),
  telephone_code: z.string(),
  telephone_number: z.string()
}).strict();

export default business_clientsCreateManyInputSchema;
