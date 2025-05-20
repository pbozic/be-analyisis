import { z } from 'zod';

export const Promo_sections_buyScalarFieldEnumSchema = z.enum(['promo_sections_buy_id','promo_sections_id','stripe_subscription_id','business_id','user_id','active_at','expires_at','tier']);

export default Promo_sections_buyScalarFieldEnumSchema;
