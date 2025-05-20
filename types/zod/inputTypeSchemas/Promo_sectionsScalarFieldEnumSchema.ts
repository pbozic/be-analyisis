import { z } from 'zod';

export const Promo_sectionsScalarFieldEnumSchema = z.enum(['promo_sections_id','name','tag','active','description','prices','limits','stripe_product_id','canPurchase','t1price','t2price','t3price','order','service_type','promo_duration_days','translatable_id','display_cards_per_page']);

export default Promo_sectionsScalarFieldEnumSchema;
