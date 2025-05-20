import { z } from 'zod';
import { FUNDS_TYPESchema } from '../inputTypeSchemas/FUNDS_TYPESchema';
import { CREDIT_STATUSSchema } from '../inputTypeSchemas/CREDIT_STATUSSchema';
import { referralsWithRelationsSchema } from './referralsSchema';
import type { referralsWithRelations } from './referralsSchema';
import { usersWithRelationsSchema } from './usersSchema';
import type { usersWithRelations } from './usersSchema';
import { transactionsWithRelationsSchema } from './transactionsSchema';
import type { transactionsWithRelations } from './transactionsSchema';

/////////////////////////////////////////
// WALLET FUNDS SCHEMA
/////////////////////////////////////////

export const wallet_fundsSchema = z.object({
	type: FUNDS_TYPESchema,
	status: CREDIT_STATUSSchema.nullable(),
	wallet_funds_id: z.string().uuid(),
	user_id: z.string(),
	referral_id: z.string().nullable(),
	charge_id: z.string().nullable(),
	amount: z.number().int(),
	reserved_order: z.string().nullable(),
	reserved_daily_meals_subscription: z.string().nullable(),
	reserved_business: z.string().nullable(),
	created_at: z.coerce.date(),
	updated_at: z.coerce.date(),
	expires_at: z.coerce.date().nullable(),
});

export type wallet_funds = z.infer<typeof wallet_fundsSchema>;

/////////////////////////////////////////
// WALLET FUNDS RELATION SCHEMA
/////////////////////////////////////////

export type wallet_fundsRelations = {
	referral?: referralsWithRelations | null;
	user: usersWithRelations;
	transactions: transactionsWithRelations[];
};

export type wallet_fundsWithRelations = z.infer<typeof wallet_fundsSchema> & wallet_fundsRelations;

export const wallet_fundsWithRelationsSchema: z.ZodType<wallet_fundsWithRelations> = wallet_fundsSchema.merge(
	z.object({
		referral: z.lazy(() => referralsWithRelationsSchema).nullable(),
		user: z.lazy(() => usersWithRelationsSchema),
		transactions: z.lazy(() => transactionsWithRelationsSchema).array(),
	})
);

export default wallet_fundsSchema;
