import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { referralsWhereInputSchema } from './referralsWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { UuidFilterSchema } from './UuidFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { UsersRelationFilterSchema } from './UsersRelationFilterSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';
import { Wallet_fundsListRelationFilterSchema } from './Wallet_fundsListRelationFilterSchema';

export const referralsWhereUniqueInputSchema: z.ZodType<Prisma.referralsWhereUniqueInput> = z.union([
  z.object({
    referral_id: z.string().uuid(),
    referred_user_id: z.string()
  }),
  z.object({
    referral_id: z.string().uuid(),
  }),
  z.object({
    referred_user_id: z.string(),
  }),
])
.and(z.object({
  referral_id: z.string().uuid().optional(),
  referred_user_id: z.string().optional(),
  AND: z.union([ z.lazy(() => referralsWhereInputSchema),z.lazy(() => referralsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => referralsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => referralsWhereInputSchema),z.lazy(() => referralsWhereInputSchema).array() ]).optional(),
  referral_code: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  referrer_user_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  conditions_met: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  reward_claimed: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  referrer: z.union([ z.lazy(() => UsersRelationFilterSchema),z.lazy(() => usersWhereInputSchema) ]).optional(),
  referred: z.union([ z.lazy(() => UsersRelationFilterSchema),z.lazy(() => usersWhereInputSchema) ]).optional(),
  credits: z.lazy(() => Wallet_fundsListRelationFilterSchema).optional()
}).strict());

export default referralsWhereUniqueInputSchema;
