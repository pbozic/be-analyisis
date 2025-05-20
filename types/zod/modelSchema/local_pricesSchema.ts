import { z } from 'zod';
import { local_productsWithRelationsSchema } from './local_productsSchema';
import type { local_productsWithRelations } from './local_productsSchema';

/////////////////////////////////////////
// LOCAL PRICES SCHEMA
/////////////////////////////////////////

export const local_pricesSchema = z.object({
	local_prices_id: z.string().uuid(),
	local_product_id: z.string(),
	currency: z.string(),
	stripe_price_id: z.string(),
	stripe_product_id: z.string(),
	tier: z.string().nullable(),
	created_at: z.coerce.date(),
	updated_at: z.coerce.date(),
});

export type local_prices = z.infer<typeof local_pricesSchema>;

/////////////////////////////////////////
// LOCAL PRICES RELATION SCHEMA
/////////////////////////////////////////

export type local_pricesRelations = {
	product: local_productsWithRelations;
};

export type local_pricesWithRelations = z.infer<typeof local_pricesSchema> & local_pricesRelations;

export const local_pricesWithRelationsSchema: z.ZodType<local_pricesWithRelations> = local_pricesSchema.merge(
	z.object({
		product: z.lazy(() => local_productsWithRelationsSchema),
	})
);

export default local_pricesSchema;
