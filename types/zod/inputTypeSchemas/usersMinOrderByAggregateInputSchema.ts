import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const usersMinOrderByAggregateInputSchema: z.ZodType<Prisma.usersMinOrderByAggregateInput> = z.object({
  user_id: z.lazy(() => SortOrderSchema).optional(),
  first_name: z.lazy(() => SortOrderSchema).optional(),
  last_name: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  gender: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  telephone: z.lazy(() => SortOrderSchema).optional(),
  telephone_code: z.lazy(() => SortOrderSchema).optional(),
  telephone_number: z.lazy(() => SortOrderSchema).optional(),
  date_of_birth: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  user_role: z.lazy(() => SortOrderSchema).optional(),
  phone_verified: z.lazy(() => SortOrderSchema).optional(),
  reviewable_id: z.lazy(() => SortOrderSchema).optional(),
  review_complete: z.lazy(() => SortOrderSchema).optional(),
  one_signal_id: z.lazy(() => SortOrderSchema).optional(),
  stripe_customer_id: z.lazy(() => SortOrderSchema).optional(),
  wallet_balance: z.lazy(() => SortOrderSchema).optional(),
  subscribed_to_daily_meals: z.lazy(() => SortOrderSchema).optional(),
  disabled: z.lazy(() => SortOrderSchema).optional(),
  active: z.lazy(() => SortOrderSchema).optional(),
  language: z.lazy(() => SortOrderSchema).optional(),
  apple_id: z.lazy(() => SortOrderSchema).optional(),
  google_id: z.lazy(() => SortOrderSchema).optional(),
  referral_code: z.lazy(() => SortOrderSchema).optional(),
  activated_at: z.lazy(() => SortOrderSchema).optional(),
  business_teams_id: z.lazy(() => SortOrderSchema).optional(),
  allow_marketing_push_notifications: z.lazy(() => SortOrderSchema).optional(),
  allow_ads_personalization: z.lazy(() => SortOrderSchema).optional(),
  allow_newsletter: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default usersMinOrderByAggregateInputSchema;
