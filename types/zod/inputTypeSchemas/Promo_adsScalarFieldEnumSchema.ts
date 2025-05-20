import { z } from 'zod';

export const Promo_adsScalarFieldEnumSchema = z.enum([
	'promo_ads_id',
	'title',
	'text',
	'tag',
	'service_type',
	'discount',
	'active',
	'code',
	'created_at',
	'active_at',
	'active_until',
]);

export default Promo_adsScalarFieldEnumSchema;
