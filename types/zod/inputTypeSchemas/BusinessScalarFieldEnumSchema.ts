import { z } from 'zod';

export const BusinessScalarFieldEnumSchema = z.enum(['business_id','address_id','delivery_address_id','finance_id','type','is_business_unit','business_group_name','name','description','tax_id','registration_id','email','telephone','telephone_code','telephone_number','website_url','working_hours','seats','minimum_order','offers_daily_meals','offers_daily_meals_on_weekend','popular','new','created_at','updated_at','parent_business_id','reviewable_id','stripe_account_id','stripe_customer_id','word_buy_stripe_product_id','word_buy_stripe_subscription_id','daily_users_sorted','daily_users_sorting_type','restaurant_overwhelmed','first_activated_at','active','sales_representative_id','fiscal_devices_id','purchase_order_limit_amount']);

export default BusinessScalarFieldEnumSchema;
