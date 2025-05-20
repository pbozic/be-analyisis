import { z } from 'zod';

export const Local_productsScalarFieldEnumSchema = z.enum(['local_product_id','name','description','currency','stripe_product_id','business_id','created_at','updated_at']);

export default Local_productsScalarFieldEnumSchema;
