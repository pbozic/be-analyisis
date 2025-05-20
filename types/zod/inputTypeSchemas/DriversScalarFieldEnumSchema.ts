import { z } from 'zod';

export const DriversScalarFieldEnumSchema = z.enum(['driver_id','business_id','online','on_order','working_hours','ride_requirements','created_at','updated_at','user_id','current_vehicle_id','last_used_vehicle_id','location','delivery_timeline','last_ping_at','is_inactive','transfer_requirements','regions','handles_taxi_orders','handles_transfer_orders','handles_delivery_orders','taxi_orders_toggled','transfer_orders_toggled','delivery_orders_toggled','partner_cash_balance','come_to_work_last_sent_at']);

export default DriversScalarFieldEnumSchema;
