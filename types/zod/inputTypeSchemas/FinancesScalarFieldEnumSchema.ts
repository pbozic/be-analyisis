import { z } from 'zod';

export const FinancesScalarFieldEnumSchema = z.enum([
	'finance_id',
	'bank_name',
	'account_holder',
	'account_number',
	'payment_preferences',
	'created_at',
	'updated_at',
]);

export default FinancesScalarFieldEnumSchema;
