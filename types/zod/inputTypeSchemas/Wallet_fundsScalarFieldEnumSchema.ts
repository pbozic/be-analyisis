import { z } from 'zod';

export const Wallet_fundsScalarFieldEnumSchema = z.enum(['wallet_funds_id','user_id','referral_id','charge_id','amount','reserved_order','reserved_daily_meals_subscription','reserved_business','created_at','updated_at','expires_at','type','status']);

export default Wallet_fundsScalarFieldEnumSchema;
