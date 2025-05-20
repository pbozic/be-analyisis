import { z } from 'zod';

export const Promo_bannersScalarFieldEnumSchema = z.enum([
	'promo_banners_id',
	'type',
	'size',
	'title',
	'text',
	'promo_section_buy_id',
	'file_id',
	'promo_ads_id',
]);

export default Promo_bannersScalarFieldEnumSchema;
