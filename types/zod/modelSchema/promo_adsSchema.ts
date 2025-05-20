import { z } from 'zod';
import { PROMO_SERVICE_TYPESSchema } from '../inputTypeSchemas/PROMO_SERVICE_TYPESSchema';
import { promo_bannersWithRelationsSchema } from './promo_bannersSchema';
import type { promo_bannersWithRelations } from './promo_bannersSchema';
import { promo_ads_categoryWithRelationsSchema } from './promo_ads_categorySchema';
import type { promo_ads_categoryWithRelations } from './promo_ads_categorySchema';

/////////////////////////////////////////
// PROMO ADS SCHEMA
/////////////////////////////////////////

export const promo_adsSchema = z.object({
	service_type: PROMO_SERVICE_TYPESSchema,
	promo_ads_id: z.string().uuid(),
	title: z.string(),
	text: z.string(),
	tag: z.string(),
	discount: z.number(),
	active: z.boolean(),
	code: z.number().int().nullable(),
	created_at: z.coerce.date(),
	active_at: z.coerce.date().nullable(),
	active_until: z.coerce.date().nullable(),
});

export type promo_ads = z.infer<typeof promo_adsSchema>;

/////////////////////////////////////////
// PROMO ADS RELATION SCHEMA
/////////////////////////////////////////

export type promo_adsRelations = {
	banner: promo_bannersWithRelations[];
	categories: promo_ads_categoryWithRelations[];
};

export type promo_adsWithRelations = z.infer<typeof promo_adsSchema> & promo_adsRelations;

export const promo_adsWithRelationsSchema: z.ZodType<promo_adsWithRelations> = promo_adsSchema.merge(
	z.object({
		banner: z.lazy(() => promo_bannersWithRelationsSchema).array(),
		categories: z.lazy(() => promo_ads_categoryWithRelationsSchema).array(),
	})
);

export default promo_adsSchema;
