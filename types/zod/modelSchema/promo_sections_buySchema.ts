import { z } from 'zod';
import { promo_sectionsWithRelationsSchema } from './promo_sectionsSchema'
import type { promo_sectionsWithRelations } from './promo_sectionsSchema'
import { businessWithRelationsSchema } from './businessSchema'
import type { businessWithRelations } from './businessSchema'
import { usersWithRelationsSchema } from './usersSchema'
import type { usersWithRelations } from './usersSchema'

/////////////////////////////////////////
// PROMO SECTIONS BUY SCHEMA
/////////////////////////////////////////

export const promo_sections_buySchema = z.object({
  promo_sections_buy_id: z.string().uuid(),
  promo_sections_id: z.string(),
  stripe_subscription_id: z.string().nullable(),
  business_id: z.string(),
  user_id: z.string().nullable(),
  active_at: z.coerce.date().nullable(),
  expires_at: z.coerce.date().nullable(),
  tier: z.number().int(),
})

export type promo_sections_buy = z.infer<typeof promo_sections_buySchema>

/////////////////////////////////////////
// PROMO SECTIONS BUY RELATION SCHEMA
/////////////////////////////////////////

export type promo_sections_buyRelations = {
  promo_section: promo_sectionsWithRelations;
  business: businessWithRelations;
  bought_by?: usersWithRelations | null;
};

export type promo_sections_buyWithRelations = z.infer<typeof promo_sections_buySchema> & promo_sections_buyRelations

export const promo_sections_buyWithRelationsSchema: z.ZodType<promo_sections_buyWithRelations> = promo_sections_buySchema.merge(z.object({
  promo_section: z.lazy(() => promo_sectionsWithRelationsSchema),
  business: z.lazy(() => businessWithRelationsSchema),
  bought_by: z.lazy(() => usersWithRelationsSchema).nullable(),
}))

export default promo_sections_buySchema;
