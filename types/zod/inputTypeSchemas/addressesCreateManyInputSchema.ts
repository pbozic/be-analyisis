import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const addressesCreateManyInputSchema: z.ZodType<Prisma.addressesCreateManyInput> = z.object({
  address_id: z.string().uuid().optional(),
  address: z.string(),
  latitude: z.string(),
  longitude: z.string(),
  street: z.string().optional().nullable(),
  house_number: z.string().optional().nullable(),
  city: z.string().optional().nullable(),
  country: z.string().optional().nullable(),
  postal: z.string().optional().nullable()
}).strict();

export default addressesCreateManyInputSchema;
