import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema';
import { PROMO_SERVICE_TYPESSchema } from '../inputTypeSchemas/PROMO_SERVICE_TYPESSchema';
import type { JsonValueType } from '../inputTypeSchemas/JsonValueSchema';
import { promo_sections_buyWithRelationsSchema } from './promo_sections_buySchema';
import type { promo_sections_buyWithRelations } from './promo_sections_buySchema';
import { translatableWithRelationsSchema } from './translatableSchema';
import type { translatableWithRelations } from './translatableSchema';

/////////////////////////////////////////
// PROMO SECTIONS SCHEMA
/////////////////////////////////////////

export const promo_sectionsSchema = z.object({
	service_type: PROMO_SERVICE_TYPESSchema,
	promo_sections_id: z.string().uuid(),
	name: z.string(),
	tag: z.string(),
	active: z.boolean(),
	description: z.string().nullable(),
	prices: JsonValueSchema.nullable(),
	limits: JsonValueSchema.nullable(),
	stripe_product_id: z.string().nullable(),
	canPurchase: z.boolean(),
	t1price: z.number().int().nullable(),
	t2price: z.number().int().nullable(),
	t3price: z.number().int().nullable(),
	order: z.number().int(),
	promo_duration_days: z.number().int(),
	translatable_id: z.string(),
	display_cards_per_page: z.number().int().nullable(),
});

export type promo_sections = z.infer<typeof promo_sectionsSchema>;

/////////////////////////////////////////
// PROMO SECTIONS RELATION SCHEMA
/////////////////////////////////////////

export type promo_sectionsRelations = {
	promo_section_buy: promo_sections_buyWithRelations[];
	translatable: translatableWithRelations;
};

export type promo_sectionsWithRelations = Omit<z.infer<typeof promo_sectionsSchema>, 'prices' | 'limits'> & {
	prices?: JsonValueType | null;
	limits?: JsonValueType | null;
} & promo_sectionsRelations;

export const promo_sectionsWithRelationsSchema: z.ZodType<promo_sectionsWithRelations> = promo_sectionsSchema.merge(
	z.object({
		promo_section_buy: z.lazy(() => promo_sections_buyWithRelationsSchema).array(),
		translatable: z.lazy(() => translatableWithRelationsSchema),
	})
);

export default promo_sectionsSchema;
