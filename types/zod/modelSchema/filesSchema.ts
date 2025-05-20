import { z } from 'zod';
import { FILE_TYPESchema } from '../inputTypeSchemas/FILE_TYPESchema'
import { documentsWithRelationsSchema } from './documentsSchema'
import type { documentsWithRelations } from './documentsSchema'
import { categoriesWithRelationsSchema } from './categoriesSchema'
import type { categoriesWithRelations } from './categoriesSchema'
import { promo_bannersWithRelationsSchema } from './promo_bannersSchema'
import type { promo_bannersWithRelations } from './promo_bannersSchema'

/////////////////////////////////////////
// FILES SCHEMA
/////////////////////////////////////////

export const filesSchema = z.object({
  file_type: FILE_TYPESchema,
  file_id: z.string().uuid(),
  url: z.string().nullable(),
  public: z.boolean(),
  mime_type: z.string(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
  document_id: z.string().nullable(),
})

export type files = z.infer<typeof filesSchema>

/////////////////////////////////////////
// FILES RELATION SCHEMA
/////////////////////////////////////////

export type filesRelations = {
  documents?: documentsWithRelations | null;
  categories: categoriesWithRelations[];
  promo_banners: promo_bannersWithRelations[];
};

export type filesWithRelations = z.infer<typeof filesSchema> & filesRelations

export const filesWithRelationsSchema: z.ZodType<filesWithRelations> = filesSchema.merge(z.object({
  documents: z.lazy(() => documentsWithRelationsSchema).nullable(),
  categories: z.lazy(() => categoriesWithRelationsSchema).array(),
  promo_banners: z.lazy(() => promo_bannersWithRelationsSchema).array(),
}))

export default filesSchema;
