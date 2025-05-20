import { z } from 'zod';

export const ReferralsScalarFieldEnumSchema = z.enum(['referral_id','referral_code','referrer_user_id','referred_user_id','conditions_met','reward_claimed','created_at','updated_at']);

export default ReferralsScalarFieldEnumSchema;
