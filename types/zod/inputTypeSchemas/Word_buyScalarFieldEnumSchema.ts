import { z } from 'zod';

export const Word_buyScalarFieldEnumSchema = z.enum(['word_buy_id','word_id','stripe_subscription_id','price','active_at','expires_at','business_id','created_at','updated_at','deleted_at']);

export default Word_buyScalarFieldEnumSchema;
