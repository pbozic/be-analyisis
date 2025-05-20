import { z } from 'zod';
import { promo_adsWithRelationsSchema } from './promo_adsSchema';
import type { promo_adsWithRelations } from './promo_adsSchema';
import { categoriesWithRelationsSchema } from './categoriesSchema';
import type { categoriesWithRelations } from './categoriesSchema';

/////////////////////////////////////////
// PROMO ADS CATEGORY SCHEMA
/////////////////////////////////////////

export const promo_ads_categorySchema = z.object({
	promo_ads_category_id: z.string().uuid(),
	promo_ads_id: z.string(),
	categories_id: z.string(),
});

export type promo_ads_category = z.infer<typeof promo_ads_categorySchema>;

/////////////////////////////////////////
// PROMO ADS CATEGORY RELATION SCHEMA
/////////////////////////////////////////

export type promo_ads_categoryRelations = {
	promo_ad: promo_adsWithRelations;
	category: categoriesWithRelations;
};

export type promo_ads_categoryWithRelations = z.infer<typeof promo_ads_categorySchema> & promo_ads_categoryRelations;

export const promo_ads_categoryWithRelationsSchema: z.ZodType<promo_ads_categoryWithRelations> =
	promo_ads_categorySchema.merge(
		z.object({
			promo_ad: z.lazy(() => promo_adsWithRelationsSchema),
			category: z.lazy(() => categoriesWithRelationsSchema),
		})
	);

export default promo_ads_categorySchema;
