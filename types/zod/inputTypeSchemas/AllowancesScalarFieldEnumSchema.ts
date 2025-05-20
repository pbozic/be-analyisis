import { z } from 'zod';

export const AllowancesScalarFieldEnumSchema = z.enum(['allowance_id','group_user_id','business_users_id','amount_taxi_wallet','amount_transfer_wallet','amount_delivery_wallet','amount_any_wallet','amount_taxi_purchase_order','amount_transfer_purchase_order','amount_delivery_purchase_order','amount_any_purchase_order','created_at','updated_at']);

export default AllowancesScalarFieldEnumSchema;
