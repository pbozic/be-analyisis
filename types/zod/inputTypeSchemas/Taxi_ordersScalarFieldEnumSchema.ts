import { z } from 'zod';

export const Taxi_ordersScalarFieldEnumSchema = z.enum(['order_id','user_id','business_users_id','business_clients_id','driver_id','vehicle_id','route','pickup_location','delivery_location','payment','estimates','timeline','preferences','status','last_sent_at','created_at','updated_at','business_id','telephone','first_name','last_name','cancellation_reason','find_drivers_attempts','is_scheduled','parent_order_id','type','subtype','flags','cargo_preferences','customer_note','parent_user_type','creating_user_id','allow_credits_usage','order_number']);

export default Taxi_ordersScalarFieldEnumSchema;
