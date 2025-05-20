import { z } from 'zod';
import { filesWithRelationsSchema } from './filesSchema';
import type { filesWithRelations } from './filesSchema';
import { promo_adsWithRelationsSchema } from './promo_adsSchema';
import type { promo_adsWithRelations } from './promo_adsSchema';

/////////////////////////////////////////
// PROMO BANNERS SCHEMA
/////////////////////////////////////////

export const promo_bannersSchema = z.object({
	promo_banners_id: z.string().uuid(),
	type: z.string(),
	size: z.string().nullable(),
	title: z.string(),
	text: z.string(),
	promo_section_buy_id: z.string().nullable(),
	file_id: z.string(),
	promo_ads_id: z.string().nullable(),
});

export type promo_banners = z.infer<typeof promo_bannersSchema>;

/////////////////////////////////////////
// PROMO BANNERS RELATION SCHEMA
/////////////////////////////////////////

export type promo_bannersRelations = {
	files: filesWithRelations;
	promo_ads?: promo_adsWithRelations | null;
};

export type promo_bannersWithRelations = z.infer<typeof promo_bannersSchema> & promo_bannersRelations;

export const promo_bannersWithRelationsSchema: z.ZodType<promo_bannersWithRelations> = promo_bannersSchema.merge(
	z.object({
		files: z.lazy(() => filesWithRelationsSchema),
		promo_ads: z.lazy(() => promo_adsWithRelationsSchema).nullable(),
	})
);

export default promo_bannersSchema;
