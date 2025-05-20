import { z } from 'zod';
import { LOST_FOUND_STATUSSchema } from '../inputTypeSchemas/LOST_FOUND_STATUSSchema'
import { documentsWithRelationsSchema } from './documentsSchema'
import type { documentsWithRelations } from './documentsSchema'
import { usersWithRelationsSchema } from './usersSchema'
import type { usersWithRelations } from './usersSchema'

/////////////////////////////////////////
// LOST ITEMS SCHEMA
/////////////////////////////////////////

export const lost_itemsSchema = z.object({
  status: LOST_FOUND_STATUSSchema,
  lost_item_id: z.string().uuid(),
  user_id: z.string().nullable(),
  description: z.string(),
  found: z.boolean().nullable(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
})

export type lost_items = z.infer<typeof lost_itemsSchema>

/////////////////////////////////////////
// LOST ITEMS RELATION SCHEMA
/////////////////////////////////////////

export type lost_itemsRelations = {
  documents: documentsWithRelations[];
  user?: usersWithRelations | null;
};

export type lost_itemsWithRelations = z.infer<typeof lost_itemsSchema> & lost_itemsRelations

export const lost_itemsWithRelationsSchema: z.ZodType<lost_itemsWithRelations> = lost_itemsSchema.merge(z.object({
  documents: z.lazy(() => documentsWithRelationsSchema).array(),
  user: z.lazy(() => usersWithRelationsSchema).nullable(),
}))

export default lost_itemsSchema;
