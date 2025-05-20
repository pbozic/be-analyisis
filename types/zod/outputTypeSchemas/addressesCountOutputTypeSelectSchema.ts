import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const addressesCountOutputTypeSelectSchema: z.ZodType<Prisma.addressesCountOutputTypeSelect> = z.object({
  users: z.boolean().optional(),
  businesses: z.boolean().optional(),
  businesses_delivery_address: z.boolean().optional(),
  business_users: z.boolean().optional(),
  daily_meals_subscriptions: z.boolean().optional(),
}).strict();

export default addressesCountOutputTypeSelectSchema;
