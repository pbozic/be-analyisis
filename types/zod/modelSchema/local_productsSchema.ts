import { z } from 'zod';
import { local_pricesWithRelationsSchema } from './local_pricesSchema'
import type { local_pricesWithRelations } from './local_pricesSchema'
import { businessWithRelationsSchema } from './businessSchema'
import type { businessWithRelations } from './businessSchema'

/////////////////////////////////////////
// LOCAL PRODUCTS SCHEMA
/////////////////////////////////////////

export const local_productsSchema = z.object({
  local_product_id: z.string().uuid(),
  name: z.string(),
  description: z.string().nullable(),
  currency: z.string(),
  stripe_product_id: z.string(),
  business_id: z.string(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
})

export type local_products = z.infer<typeof local_productsSchema>

/////////////////////////////////////////
// LOCAL PRODUCTS RELATION SCHEMA
/////////////////////////////////////////

export type local_productsRelations = {
  prices: local_pricesWithRelations[];
  business: businessWithRelations;
};

export type local_productsWithRelations = z.infer<typeof local_productsSchema> & local_productsRelations

export const local_productsWithRelationsSchema: z.ZodType<local_productsWithRelations> = local_productsSchema.merge(z.object({
  prices: z.lazy(() => local_pricesWithRelationsSchema).array(),
  business: z.lazy(() => businessWithRelationsSchema),
}))

export default local_productsSchema;
