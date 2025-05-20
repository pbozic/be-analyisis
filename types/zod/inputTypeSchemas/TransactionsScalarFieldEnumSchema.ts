import { z } from 'zod';

export const TransactionsScalarFieldEnumSchema = z.enum(['transaction_id','user_id','amount','type','description','createdAt','updatedAt','delivery_order_id','taxi_order_id','wallet_fund_id']);

export default TransactionsScalarFieldEnumSchema;
