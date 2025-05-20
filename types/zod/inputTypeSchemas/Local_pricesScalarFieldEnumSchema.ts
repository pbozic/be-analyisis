import { z } from 'zod';

export const Local_pricesScalarFieldEnumSchema = z.enum(['local_prices_id','local_product_id','currency','stripe_price_id','stripe_product_id','tier','created_at','updated_at']);

export default Local_pricesScalarFieldEnumSchema;
