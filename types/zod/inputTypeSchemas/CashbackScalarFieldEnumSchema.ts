import { z } from 'zod';

export const CashbackScalarFieldEnumSchema = z.enum(['cashback_id','user_id','amount','type','source','status','description','earned_at','expires_at','converted_at','taxi_order_id','delivery_order_id']);

export default CashbackScalarFieldEnumSchema;
