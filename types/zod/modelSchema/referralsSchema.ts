import { z } from 'zod';
import { usersWithRelationsSchema } from './usersSchema';
import type { usersWithRelations } from './usersSchema';
import { wallet_fundsWithRelationsSchema } from './wallet_fundsSchema';
import type { wallet_fundsWithRelations } from './wallet_fundsSchema';

/////////////////////////////////////////
// REFERRALS SCHEMA
/////////////////////////////////////////

export const referralsSchema = z.object({
	referral_id: z.string().uuid(),
	referral_code: z.string(),
	referrer_user_id: z.string(),
	referred_user_id: z.string(),
	conditions_met: z.boolean(),
	reward_claimed: z.boolean(),
	created_at: z.coerce.date(),
	updated_at: z.coerce.date(),
});

export type referrals = z.infer<typeof referralsSchema>;

/////////////////////////////////////////
// REFERRALS RELATION SCHEMA
/////////////////////////////////////////

export type referralsRelations = {
	referrer: usersWithRelations;
	referred: usersWithRelations;
	credits: wallet_fundsWithRelations[];
};

export type referralsWithRelations = z.infer<typeof referralsSchema> & referralsRelations;

export const referralsWithRelationsSchema: z.ZodType<referralsWithRelations> = referralsSchema.merge(
	z.object({
		referrer: z.lazy(() => usersWithRelationsSchema),
		referred: z.lazy(() => usersWithRelationsSchema),
		credits: z.lazy(() => wallet_fundsWithRelationsSchema).array(),
	})
);

export default referralsSchema;
