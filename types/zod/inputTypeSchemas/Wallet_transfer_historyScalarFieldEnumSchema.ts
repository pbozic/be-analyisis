import { z } from 'zod';

export const Wallet_transfer_historyScalarFieldEnumSchema = z.enum(['wallet_transfer_history_id','order_id','amount','created_at','updated_at','success']);

export default Wallet_transfer_historyScalarFieldEnumSchema;
